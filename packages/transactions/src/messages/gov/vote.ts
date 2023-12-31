import { createMsgVote as protoMsgVote } from '@gravity-bridge/proto'

import { generateTypes, createMsgVote, MSG_VOTE_TYPES } from '@gravity-bridge/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgVoteParams {
  proposalId: number
  option: number
}

export const createEIP712MsgVote = (context: TxContext, params: MsgVoteParams) => {
  const types = generateTypes(MSG_VOTE_TYPES)

  const message = createMsgVote(
    params.proposalId,
    params.option,
    context.sender.accountAddress,
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgVote = (context: TxContext, params: MsgVoteParams) => {
  return protoMsgVote(
    params.proposalId,
    params.option,
    context.sender.accountAddress,
  )
}

/**
 * Creates a transaction for a MsgVote object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/gov#vote-1 | MsgVote}
 *
 * @param context - Transaction Context
 * @param params - MsgVote Params
 * @returns Transaction with the MsgVote payload
 *
 */
export const createTxMsgVote = (context: TxContext, params: MsgVoteParams) => {
  const typedData = createEIP712MsgVote(context, params)
  const cosmosMsg = createCosmosMsgVote(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
