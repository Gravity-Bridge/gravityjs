import { MsgBid } from '../../proto/auction/v1/msgs_pb'

export function createMsgBid(
  auction_id: string,
  bidder: string,
  amount: string,
  bid_fee: string,
) {
  const message = new MsgBid({
    auctionId: BigInt(auction_id),
    bidder,
    amount: BigInt(amount),
    bidFee: BigInt(bid_fee),
  })
  return {
    message,
    path: MsgBid.typeName,
  }
}
