import { AminoConverters } from '@cosmjs/stargate'
import { MsgBid } from '../../proto/auction/v1/msgs_pb'
import { createAminoConverter } from '../../amino/objectConverter'

// TODO: Add MsgUpdateParams registration when type is added
export function createAuctionAminoConverters(): AminoConverters {
  return {
    ...createAminoConverter(MsgBid, 'gravity/MsgBid'),
  }
}
