import { auctionRegistryTypes } from './registry'

import { MsgBid } from '../../proto/auction/v1/msgs_pb'

describe('test auction registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(auctionRegistryTypes).toStrictEqual([MsgBid])
  })
})
