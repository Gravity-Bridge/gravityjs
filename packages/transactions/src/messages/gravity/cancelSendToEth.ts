import { createMsgCancelSendToEth as protoMsgCancelSendToEth } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgCancelSendToEth,
  MSG_CANCEL_SEND_TO_ETH_TYPES,
} from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgCancelSendToEthParams {
  sender: string
}

export const createEIP712MsgCancelSendToEth = (params: MsgCancelSendToEthParams) => {
  const types = generateTypes(MSG_CANCEL_SEND_TO_ETH_TYPES)

  const message = createMsgCancelSendToEth(
    params.sender,
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgCancelSendToEth = (params: MsgCancelSendToEthParams) => {
  return protoMsgCancelSendToEth(
    params.sender,
  )
}

/**
 * Creates a transaction for a `MsgCancelSendToEth` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Gravity
 * {@link https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/module/proto/gravity/v1/msgs.proto#L276-L282 | MsgCancelSendToEth}
 *
 * @param context - Transaction Context
 * @param params - MsgCancelSendToEth Params
 * @returns Transaction with the MsgCancelSendToEth payload
 *
 */
export const createTxMsgCancelSendToEth = (
  context: TxContext,
  params: MsgCancelSendToEthParams,
) => {
  const typedData = createEIP712MsgCancelSendToEth(params)
  const cosmosMsg = createCosmosMsgCancelSendToEth(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
