import { MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES, createMsgExecuteIbcAutoForwards } from './executeIbcAutoForwards'
import TestUtils from '../../tests/utils'

describe('test MsgExecuteIbcAutoForwards types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'executor', type: 'string' },
        { name: 'forwards_to_clear', type: 'string' },
      ],
    }

    expect(MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const sender = TestUtils.addr1
    const to_clear = BigInt("5")

    const msg = createMsgExecuteIbcAutoForwards(sender, to_clear)

    const expMsg = {
      type: 'gravity/MsgExecuteIbcAutoForwards',
      value: {
        sender,
        to_clear,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
