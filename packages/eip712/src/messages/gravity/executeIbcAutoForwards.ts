export const MSG_EXECUTE_IBC_AUTO_FORWARDS_TYPES = {
  MsgValue: [
    { name: 'executor', type: 'string' },
    { name: 'forwards_to_clear', type: 'string' },
  ],
}
export function createMsgExecuteIbcAutoForwards(
  executor: string,
  forwards_to_clear: BigInt,
) {
  return {
    type: 'gravity/MsgExecuteIbcAutoForwards',
    value: {
      executor,
      forwards_to_clear: String(forwards_to_clear),
    },
  }
}
