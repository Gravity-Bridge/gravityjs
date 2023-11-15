import { createMsgRequestBatch as protoMsgRequestBatch } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgRequestBatch,
  MSG_REQUEST_BATCH_TYPES,
} from '@gravity-bridge/eip712'
import { MsgRequestBatchParams, createTxMsgRequestBatch } from './requestBatch'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const amount = TestUtils.amount1
const receiver = TestUtils.addr1
const sender = context.sender.accountAddress

const params: MsgRequestBatchParams = {
  sender,
  denom,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_REQUEST_BATCH_TYPES)
    const message = createMsgRequestBatch(
      params.sender,
      params.denom,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgRequestBatch(
      params.sender,
      params.denom,
    )

    const payload = createTxMsgRequestBatch(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
