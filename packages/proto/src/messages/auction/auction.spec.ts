import { createMsgBid } from './msgBid'
import { MsgBid } from '../../proto/auction/v1/msgs_pb'
import { from, to, denom } from '../../proto/tests/utils'
import { JSONOptions } from '../../registry/registry'

describe('test Auction Module message generation', () => {
  it('correctly wraps MsgBid', () => {
    const id = '1'
    const amount = '10000000'
    const msg = createMsgBid(id, from, amount, amount)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      auction_id: id,
      bidder: from,
      amount: amount,
      bid_fee: amount,
    })
    expect(msg.path).toStrictEqual(MsgBid.typeName)
  })
})
