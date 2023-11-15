import { MsgRequestBatch } from '../../proto/gravity/v1/msgs_pb'

export function createMsgRequestBatch(
  sender: string,
  denom: string,
) {
  const message = new MsgRequestBatch({
    sender,
    denom,
  })

  return {
    message,
    path: MsgRequestBatch.typeName,
  }
}
