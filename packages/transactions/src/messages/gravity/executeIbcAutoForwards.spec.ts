import { createMsgExecuteIbcAutoForwards as protoMsgExecuteIbcAutoForwards } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgExecuteIbcAutoForwards,
  MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES,
} from '@gravity-bridge/eip712'
import { MsgExecuteIbcAutoForwardsParams, createTxMsgExecuteIbcAutoForwards } from './executeIbcAutoForwards'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const amount = TestUtils.amount1
const executor = context.sender.accountAddress

const params: MsgExecuteIbcAutoForwardsParams = {
  executor,
  forwards_to_clear: amount,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES)
    const message = createMsgExecuteIbcAutoForwards(
      params.executor,
      BigInt(params.forwards_to_clear),
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgExecuteIbcAutoForwards(
      params.executor,
      params.forwards_to_clear,
    )

    const payload = createTxMsgExecuteIbcAutoForwards(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
