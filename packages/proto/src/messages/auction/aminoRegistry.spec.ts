import { createAuctionAminoConverters } from './aminoRegistry'
import { MsgBid } from '../../proto/auction/v1/msgs_pb'
import { createAminoConverter } from '../../amino/objectConverter'
import { expectEqualsDefaultAminoConverters } from '../../../testutils/compareAminoRegistry'

describe('test auction amino converters', () => {
  it('creates expected amino converters', () => {
    const aminoConverters = createAuctionAminoConverters()
    const expAminoConverters = {
      ...createAminoConverter(MsgBid, 'gravity/MsgBid'),
    }

    expectEqualsDefaultAminoConverters(aminoConverters, expAminoConverters)
  })
})
