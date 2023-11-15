export const MSG_CANCEL_SEND_TO_ETH_TYPES = {
  MsgValue: [
    { name: 'sender', type: 'string' },
  ],
}
export function createMsgCancelSendToEth(
  sender: string,
) {
  return {
    type: 'gravity/MsgCancelSendToEth',
    value: {
      sender,
    },
  }
}
