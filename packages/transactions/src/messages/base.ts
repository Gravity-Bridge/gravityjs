import {
  createEIP712,
  generateFee,
  generateMessageWithMultipleTransactions,
  createTypedData,
} from '@gravity-bridge/eip712'
import {
  createTransactionWithMultipleMessages,
  MessageGenerated,
  createStdFee,
  createStdSignDocFromProto,
} from '@gravity-bridge/proto'
import { Chain, Fee, Sender, TxPayload } from './common'

/**
 * TxContext is the transaction context for a SignDoc that is independent
 * from the transaction payload.
 */
export interface TxContext {
  chain: Chain
  sender: Sender
  fee: Fee
  memo: string
}

/**
 * EIP712TypedData represents a signable EIP-712 typed data object,
 * including both the types and message object.
 *
 * @remarks
 * See the EIP-712 specification for more:
 * {@link https://eips.ethereum.org/EIPS/eip-712}
 */
export interface EIP712TypedData {
  types: object
  message: object | object[]
}

/**
 * wrapTypeToArray wraps a generic type or array of said type and returns the object wrapped
 * in an array. This enables our interfaces to indiscriminantly take either pure objects or
 * arrays to easily support wrapping muliple messages.
 */
export const wrapTypeToArray = <T>(obj: T | T[]) => {
  return Array.isArray(obj) ? obj : [obj]
}

export const createLegacyEIP712Payload = (
  context: TxContext,
  typedData: EIP712TypedData,
) => {
  const { fee, sender, chain, memo } = context

  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )

  const payloadMessages = wrapTypeToArray(typedData.message)

  const messages = generateMessageWithMultipleTransactions(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    payloadMessages,
  )

  return createEIP712(typedData.types, chain.chainId, messages)
}

export const createEIP712TypedData = (
  context: TxContext,
  protoMsgs: MessageGenerated | MessageGenerated[],
) => {
  const { fee, sender, chain, memo } = context
  const protoMsgsArray = wrapTypeToArray(protoMsgs)

  try {
    const stdFee = createStdFee(fee.amount, fee.denom, parseInt(fee.gas, 10))
    const stdSignDoc = createStdSignDocFromProto(
      protoMsgsArray,
      stdFee,
      chain.cosmosChainId,
      memo,
      sender.sequence,
      sender.accountNumber,
    )

    return createTypedData(chain.chainId, stdSignDoc)
  } catch {
    return undefined
  }
}

export const createCosmosPayload = (
  context: TxContext,
  cosmosPayload: any | any[], // TODO: re-export Protobuf Message type from /proto
) => {
  const { fee, sender, chain, memo } = context

  const messages = wrapTypeToArray(cosmosPayload)

  return createTransactionWithMultipleMessages(
    messages,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )
}

/**
 * Creates a signable transaction with SignDirect, LegacyAmino, and EIP-712 components.
 * Supports multiple Msgs of the same type (must be in typedData AND cosmosMessages)
 *
 * @param context - Transaction Context
 * @param typedData - EIP-712 Typed Data
 * @param cosmosMessages - Cosmos SDK Message(s) to sign
 * @returns  Signable Payload with EIP712 types, Sign Direct + Legacy Amino
 */
export const createTransactionPayload = (
  context: TxContext,
  typedData: EIP712TypedData,
  cosmosMessages: any | any[], // TODO: re-export Protobuf Message type from /proto
): TxPayload => {
  const eip712Payload = createLegacyEIP712Payload(context, typedData)

  const cosmosPayload = createCosmosPayload(context, cosmosMessages)

  return {
    signDirect: cosmosPayload.signDirect,
    legacyAmino: cosmosPayload.legacyAmino,
    eipToSign: eip712Payload,
  }
}

/**
 * Creates an EIP712-compatible transaction payload using the new multi-msg type version of
 * EIP712 (NOT YET SUPPORTED BY ALTHEA-L1, requires a feature backport)
 *
 * @param context - Transaction Context
 * @param messages - Protobuf-encoded message(s)
 * @returns Signable Payload with EIP712 types, Sign Direct + Legacy Amino
 */
export const newCreateTransactionPayload = (
  context: TxContext,
  messages: MessageGenerated | MessageGenerated[],
) => {
  const cosmosPayload = createCosmosPayload(context, messages)
  const eip712Payload = createEIP712TypedData(context, messages)

  return {
    signDirect: cosmosPayload.signDirect,
    legacyAmino: cosmosPayload.legacyAmino,
    eipToSign: eip712Payload,
  }
}
