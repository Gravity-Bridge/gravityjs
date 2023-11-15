import { MSG_SEND_TO_ETH_TYPES, createMsgSendToEth } from './sendToEth'
import TestUtils from '../../tests/utils'

describe('test MsgSendToEth types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'sender', type: 'string' },
        { name: 'eth_dest', type: 'string' },
        { name: 'amount', type: 'TypeCoin[]' },
        { name: 'bridge_fee', type: 'TypeCoin[]' },
        { name: 'chain_fee', type: 'TypeCoin[]' },
      ],
      TypeCoin: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
      ],
    }

    expect(MSG_SEND_TO_ETH_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const { denom } = TestUtils
    const amount = TestUtils.amount1
    const bridge_fee = TestUtils.amount2
    const chain_fee = TestUtils.amount2
    const sender = TestUtils.addr1
    const receiver = TestUtils.addr2

    const msg = createMsgSendToEth(sender, receiver, amount, denom, bridge_fee, chain_fee)

    const expMsg = {
      type: 'gravity/MsgSendToEth',
      value: {
        sender,
        receiver,
        amount: [
          {
            amount,
            denom,
          },
        ],
        bridge_fee: [
          {
            bridge_fee,
            denom,
          },
        ],
        chain_fee: [
          {
            chain_fee,
            denom,
          },
        ],
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
