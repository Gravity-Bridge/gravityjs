import { MsgCancelSendToEth, MsgExecuteIbcAutoForwards, MsgRequestBatch, MsgSendToEth } from '../../proto/gravity/v1/msgs_pb'
import { gravityRegistryTypes } from './registry'


describe('test gravity registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(gravityRegistryTypes).toStrictEqual([MsgSendToEth, MsgCancelSendToEth, MsgRequestBatch, MsgExecuteIbcAutoForwards])
  })
})
