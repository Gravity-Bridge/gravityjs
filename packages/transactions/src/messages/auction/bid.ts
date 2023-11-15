import { createMsgBid as protoCreateMsgBid } from '@gravity-bridge/proto'
import { createMsgBid } from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext, wrapTypeToArray } from '../base'
import { generateTypes, MSG_BID_TYPES } from '@gravity-bridge/eip712'

export const createEIP712MsgBid = (context: TxContext, params: MsgBidParams[]) => {
  const types = generateTypes(MSG_BID_TYPES)

  let messages = new Array()
  for (var param of params) {
    const message = createMsgBid(param.auction_id, context.sender.accountAddress, param.amount, param.bid_fee)
    messages.push(message)
  }

  return {
    types,
    message: messages,
  }
}

export interface MsgBidParams {
  auction_id: string
  amount: string
  bid_fee: string
}

export const createCosmosMsgBid = (context: TxContext, params: MsgBidParams[]) => {
  let messages = new Array()
  for (var param of params) {
    const message = protoCreateMsgBid(
      param.auction_id,
      context.sender.accountAddress,
      param.amount,
      param.bid_fee,
    )
    messages.push(message)
  }
  return messages
}

/**
 * Creates a transaction for a MsgSend object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/bank#msgsend | MsgSend}
 *
 * @param context - Transaction Context
 * @param params - MsgSend Params
 * @returns Transaction with the MsgSend payload
 *
 */
export const createTxMsgBid = (context: TxContext, params: MsgBidParams | MsgBidParams[]) => {
  let multiparams = wrapTypeToArray(params)
  const typedData = createEIP712MsgBid(context, multiparams)
  const cosmosMsg = createCosmosMsgBid(context, multiparams)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
