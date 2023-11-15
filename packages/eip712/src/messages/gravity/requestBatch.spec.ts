import { MSG_REQUEST_BATCH_TYPES, createMsgRequestBatch } from './requestBatch'
import TestUtils from '../../tests/utils'

describe('test MsgRequestBatch types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'sender', type: 'string' },
        { name: 'denom', type: 'string' },
      ],
    }

    expect(MSG_REQUEST_BATCH_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const sender = TestUtils.addr1
    const denom = TestUtils.denom

    const msg = createMsgRequestBatch(sender, denom)

    const expMsg = {
      type: 'gravity/MsgRequestBatch',
      value: {
        sender,
        denom,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
