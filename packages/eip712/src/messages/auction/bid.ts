export const MSG_BID_TYPES = {
  MsgValue: [
    { name: 'auction_id', type: 'string' },
    { name: 'bidder', type: 'string' },
    { name: 'amount', type: 'string' },
    { name: 'bid_fee', type: 'string' },
  ],
}

export function createMsgBid(
  auction_id: string,
  bidder: string,
  amount: string,
  bid_fee: string,
) {
  return {
    type: 'gravity/MsgBid',
    value: {
      auction_id,
      bidder,
      amount,
      bid_fee,
    },
  }
}
