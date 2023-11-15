import { createMsgExecuteIbcAutoForwards as protoMsgExecuteIbcAutoForwards } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgExecuteIbcAutoForwards,
  MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES,
} from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgExecuteIbcAutoForwardsParams {
  executor: string
  forwards_to_clear: string
}

export const createEIP712MsgExecuteIbcAutoForwards = (params: MsgExecuteIbcAutoForwardsParams) => {
  const types = generateTypes(MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES)

  const message = createMsgExecuteIbcAutoForwards(
    params.executor,
    BigInt(params.forwards_to_clear),
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgExecuteIbcAutoForwards = (params: MsgExecuteIbcAutoForwardsParams) => {
  return protoMsgExecuteIbcAutoForwards(
    params.executor,
    params.forwards_to_clear,
  )
}

/**
 * Creates a transaction for a `MsgExecuteIbcAutoForwards` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Gravity
 * {@link https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/module/proto/gravity/v1/msgs.proto#L208-L215 | MsgExecuteIbcAutoForwards}
 *
 * @param context - Transaction Context
 * @param params - MsgExecuteIbcAutoForwards Params
 * @returns Transaction with the MsgExecuteIbcAutoForwards payload
 *
 */
export const createTxMsgExecuteIbcAutoForwards = (
  context: TxContext,
  params: MsgExecuteIbcAutoForwardsParams,
) => {
  const typedData = createEIP712MsgExecuteIbcAutoForwards(params)
  const cosmosMsg = createCosmosMsgExecuteIbcAutoForwards(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
