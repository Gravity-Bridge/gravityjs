import { MSG_CANCEL_SEND_TO_ETH_TYPES, createMsgCancelSendToEth } from './cancelSendToEth'
import TestUtils from '../../tests/utils'

describe('test MsgCancelSendToEth types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'sender', type: 'string' },
      ],
    }

    expect(MSG_CANCEL_SEND_TO_ETH_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const sender = TestUtils.addr1

    const msg = createMsgCancelSendToEth(sender)

    const expMsg = {
      type: 'gravity/MsgCancelSendToEth',
      value: {
        sender,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
