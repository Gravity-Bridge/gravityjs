import { MsgSendToEth } from '../../proto/gravity/v1/msgs_pb'
import { Coin } from '../../proto/cosmos/base/coin'

export function createMsgSendToEth(
  sender: string,
  eth_dest: string,
  amount: string,
  denom: string,
  bridge_fee: string,
  chain_fee: string,
) {
  const amountC = new Coin({
    denom,
    amount,
  })
  const bridge_feeC = new Coin({
    denom,
    amount: bridge_fee,
  })
  const chain_feeC = new Coin({
    denom,
    amount: chain_fee,
  })
  const message = new MsgSendToEth({
    sender,
    ethDest: eth_dest,
    amount: amountC,
    bridgeFee: bridge_feeC,
    chainFee: chain_feeC,
  })

  return {
    message,
    path: MsgSendToEth.typeName,
  }
}
