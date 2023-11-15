import { createMsgSendToEth } from './msgSendToEth'
import { createMsgCancelSendToEth } from './msgCancelSendToEth'
import { createMsgRequestBatch } from './msgRequestBatch'
import { createMsgExecuteIbcAutoForwards } from './msgExecuteIbcAutoForwards'

import { MsgSendToEth, MsgCancelSendToEth, MsgRequestBatch, MsgExecuteIbcAutoForwards } from '../../proto/gravity/v1/msgs_pb'
import { from, to, denom } from '../../proto/tests/utils'
import { JSONOptions } from '../../registry/registry'

describe('test Gravity Module message generation', () => {
  it('correctly wraps MsgSendToEth', () => {
    const amount = '10000000'
    const msg = createMsgSendToEth(from, to, amount, denom, amount, amount)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
      eth_dest: to,
      amount,
      denom,
      bridge_fee: amount,
      chain_fee: amount,
    })
    expect(msg.path).toStrictEqual(MsgSendToEth.typeName)
  })

  it('correctly wraps MsgCancelSendToEth', () => {
    const msg = createMsgCancelSendToEth(from)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
    })
    expect(msg.path).toStrictEqual(MsgCancelSendToEth.typeName)
  })

  it('correctly wraps MsgRequestBatch', () => {
    const msg = createMsgRequestBatch(from, denom)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
      denom,
    })
    expect(msg.path).toStrictEqual(MsgRequestBatch.typeName)
  })

  it('correctly wraps MsgExecuteIbcAutoForwards', () => {
    const amount = '10000000'
    const msg = createMsgExecuteIbcAutoForwards(from, amount)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
      forwards_to_clear: amount,
    })
    expect(msg.path).toStrictEqual(MsgExecuteIbcAutoForwards.typeName)
  })
})
