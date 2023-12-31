import { Any } from '@bufbuild/protobuf'
import { Coin } from '../../proto/cosmos/base/coin'
import { MsgSubmitProposal } from '../../proto/cosmos/gov/tx'

export function createMsgSubmitProposal(
  content: Any,
  initialDepositDenom: string,
  initialDepositAmount: string,
  proposer: string,
) {
  const initialDeposit = new Coin({
    denom: initialDepositDenom,
    amount: initialDepositAmount,
  })
  const msg = new MsgSubmitProposal({
    content,
    initialDeposit: [initialDeposit],
    proposer,
  })

  return {
    message: msg,
    path: MsgSubmitProposal.typeName,
  }
}
