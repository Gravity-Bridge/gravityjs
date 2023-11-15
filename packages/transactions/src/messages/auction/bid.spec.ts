import { createMsgBid as protoMsgBid } from '@gravity-bridge/proto'
import { generateTypes, createMsgBid, MSG_BID_TYPES } from '@gravity-bridge/eip712'
import { MsgBidParams, createTxMsgBid } from './bid'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const id = TestUtils.amount1
const amount = TestUtils.amount1
const fee = TestUtils.amount2

const params: MsgBidParams = {
  auction_id: id,
  amount,
  bid_fee: fee,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_BID_TYPES)
    const message = createMsgBid(
      params.auction_id,
      context.sender.accountAddress,
      params.amount,
      params.bid_fee
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgBid(
      params.auction_id,
      context.sender.accountAddress,
      params.amount,
      params.bid_fee,
    )

    const payload = createTxMsgBid(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
