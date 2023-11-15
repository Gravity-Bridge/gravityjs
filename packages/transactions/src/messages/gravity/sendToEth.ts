import { createMsgSendToEth as protoMsgSendToEth } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgSendToEth,
  MSG_SEND_TO_ETH_TYPES,
} from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgSendToEthParams {
  sender: string
  eth_dest: string
  amount: string
  denom: string
  bridge_fee: string
  chain_fee: string
}

export const createEIP712MsgSendToEth = (params: MsgSendToEthParams) => {
  const types = generateTypes(MSG_SEND_TO_ETH_TYPES)

  const message = createMsgSendToEth(
    params.sender,
    params.eth_dest,
    params.amount,
    params.denom,
    params.bridge_fee,
    params.chain_fee,
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgSendToEth = (params: MsgSendToEthParams) => {
  return protoMsgSendToEth(
    params.sender,
    params.eth_dest,
    params.amount,
    params.denom,
    params.bridge_fee,
    params.chain_fee,
  )
}

/**
 * Creates a transaction for a `MsgSendToEth` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Gravity
 * {@link https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/module/proto/gravity/v1/msgs.proto#L104-L132 | MsgSendToEth}
 *
 * @param context - Transaction Context
 * @param params - MsgSendToEth Params
 * @returns Transaction with the MsgSendToEth payload
 *
 */
export const createTxMsgSendToEth = (
  context: TxContext,
  params: MsgSendToEthParams,
) => {
  const typedData = createEIP712MsgSendToEth(params)
  const cosmosMsg = createCosmosMsgSendToEth(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
