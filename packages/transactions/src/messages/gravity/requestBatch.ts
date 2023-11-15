import { createMsgRequestBatch as protoMsgRequestBatch } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgRequestBatch,
  MSG_REQUEST_BATCH_TYPES,
} from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgRequestBatchParams {
  sender: string
  denom: string
}

export const createEIP712MsgRequestBatch = (params: MsgRequestBatchParams) => {
  const types = generateTypes(MSG_REQUEST_BATCH_TYPES)

  const message = createMsgRequestBatch(
    params.sender,
    params.denom,
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgRequestBatch = (params: MsgRequestBatchParams) => {
  return protoMsgRequestBatch(
    params.sender,
    params.denom,
  )
}

/**
 * Creates a transaction for a `MsgRequestBatch` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Gravity
 * {@link https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/module/proto/gravity/v1/msgs.proto#L136-L148 | MsgRequestBatch}
 *
 * @param context - Transaction Context
 * @param params - MsgRequestBatch Params
 * @returns Transaction with the MsgRequestBatch payload
 *
 */
export const createTxMsgRequestBatch = (
  context: TxContext,
  params: MsgRequestBatchParams,
) => {
  const typedData = createEIP712MsgRequestBatch(params)
  const cosmosMsg = createCosmosMsgRequestBatch(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
