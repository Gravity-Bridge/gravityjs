export const MSG_REQUEST_BATCH_TYPES = {
  MsgValue: [
    { name: 'sender', type: 'string' },
    { name: 'denom', type: 'string' },
  ],
}
export function createMsgRequestBatch(
  sender: string,
  denom: string,
) {
  return {
    type: 'gravity/MsgRequestBatch',
    value: {
      sender,
      denom,
    },
  }
}
