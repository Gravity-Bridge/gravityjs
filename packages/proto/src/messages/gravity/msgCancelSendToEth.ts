import { MsgCancelSendToEth } from '../../proto/gravity/v1/msgs_pb'

export function createMsgCancelSendToEth(
  sender: string,
) {
  const message = new MsgCancelSendToEth({
    sender,
  })

  return {
    message,
    path: MsgCancelSendToEth.typeName,
  }
}
