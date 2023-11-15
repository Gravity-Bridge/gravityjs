import { AminoConverters } from '@cosmjs/stargate'
import { MsgSendToEth, MsgRequestBatch, MsgExecuteIbcAutoForwards, MsgCancelSendToEth } from '../../proto/gravity/v1/msgs_pb'
import { createAminoConverter } from '../../amino/objectConverter'

export function createGravityAminoConverters(): AminoConverters {
  return {
    ...createAminoConverter(MsgSendToEth, 'gravity/MsgSendToEth'),
    ...createAminoConverter(MsgCancelSendToEth, 'gravity/MsgCancelSendToEth'),
    ...createAminoConverter(MsgRequestBatch, 'gravity/MsgRequestBatch'),
    ...createAminoConverter(MsgExecuteIbcAutoForwards, 'gravity/MsgExecuteIbcAutoForwards'),
  }
}
