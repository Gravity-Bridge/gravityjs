import { MsgExecuteIbcAutoForwards } from '../../proto/gravity/v1/msgs_pb'

export function createMsgExecuteIbcAutoForwards(
  executor: string,
  forwards_to_clear: string,
) {
  const message = new MsgExecuteIbcAutoForwards({
    executor,
    forwardsToClear: BigInt(forwards_to_clear),
  })

  return {
    message,
    path: MsgExecuteIbcAutoForwards.typeName,
  }
}
