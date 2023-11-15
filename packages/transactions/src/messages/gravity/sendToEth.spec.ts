import { createMsgSendToEth as protoMsgSendToEth } from '@gravity-bridge/proto'

import {
  generateTypes,
  createMsgSendToEth,
  MSG_SEND_TO_ETH_TYPES,
} from '@gravity-bridge/eip712'
import { MsgSendToEthParams, createTxMsgSendToEth } from './sendToEth'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const amount = TestUtils.amount1
const receiver = TestUtils.addr1
const sender = context.sender.accountAddress

const params: MsgSendToEthParams = {
  sender,
  eth_dest: receiver,
  amount,
  denom,
  bridge_fee: amount,
  chain_fee: amount,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_SEND_TO_ETH_TYPES)
    const message = createMsgSendToEth(
      params.sender,
      params.eth_dest,
      params.amount,
      params.denom,
      params.amount,
      params.amount,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgSendToEth(
      params.sender,
      params.eth_dest,
      params.amount,
      params.denom,
      params.amount,
      params.amount,
    )

    const payload = createTxMsgSendToEth(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
