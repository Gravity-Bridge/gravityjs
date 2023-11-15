import { MSG_BID_TYPES, createMsgBid } from './bid'
import TestUtils from '../../tests/utils'

describe('test MsgBid types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'auction_id', type: 'string' },
        { name: 'bidder', type: 'string' },
        { name: 'amount', type: 'string' },
        { name: 'bid_fee', type: 'string' },
      ],
    }

    expect(MSG_BID_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const id = '1'
    const senderBech32 = TestUtils.addr1
    const amount = TestUtils.amount1
    const fee = TestUtils.amount2

    const msg = createMsgBid(id, senderBech32, amount, fee)

    const expMsg = {
      type: 'gravity/MsgBid',
      value: {
        auction_id: id,
        sender: senderBech32,
        amount,
        fee,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
