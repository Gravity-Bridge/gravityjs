import { createGravityAminoConverters } from './aminoRegistry'
import { createAminoConverter } from '../../amino/objectConverter'
import { expectEqualsDefaultAminoConverters } from '../../../testutils/compareAminoRegistry'
import { MsgSendToEth, MsgCancelSendToEth, MsgRequestBatch, MsgExecuteIbcAutoForwards } from '../../proto/gravity/v1/msgs_pb'

describe('test gravity amino converters', () => {
  it('creates expected amino converters', () => {
    const aminoConverters = createGravityAminoConverters()
    const expAminoConverters = {
      ...createAminoConverter(MsgSendToEth, 'gravity/MsgSendToEth'),
      ...createAminoConverter(MsgCancelSendToEth, 'gravity/MsgCancelSendToEth'),
      ...createAminoConverter(MsgRequestBatch, 'gravity/MsgRequestBatch'),
      ...createAminoConverter(MsgExecuteIbcAutoForwards, 'gravity/MsgExecuteIbcAutoForwards'),
    }

    expectEqualsDefaultAminoConverters(aminoConverters, expAminoConverters)
  })
})
