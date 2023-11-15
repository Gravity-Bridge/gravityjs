import { createMsgCancelSendToEth as protoMsgCancelSendToEth } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgCancelSendToEth,
  MSG_CANCEL_SEND_TO_ETH_TYPES,
} from '@gravity-bridge/eip712'
import { MsgCancelSendToEthParams, createTxMsgCancelSendToEth } from './cancelSendToEth'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const sender = context.sender.accountAddress

const params: MsgCancelSendToEthParams = {
  sender,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_CANCEL_SEND_TO_ETH_TYPES)
    const message = createMsgCancelSendToEth(
      params.sender,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgCancelSendToEth(
      params.sender,
    )

    const payload = createTxMsgCancelSendToEth(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
