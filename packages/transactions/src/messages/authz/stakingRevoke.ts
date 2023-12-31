import { createMsgRevoke, RevokeMessages } from '@gravity-bridge/proto'

import { createTransactionPayload, TxContext } from '../base'

export interface MsgStakeRevokeAuthorizationParams {
  granteeAddress: string
}

export const createEIP712MsgStakeRevokeAuthorization = () => {
  // TODO: EIP-712 is blocked until this message is added to @gravity-bridge/eip712
  return {
    types: {},
    message: {},
  }
}

export const createCosmosMsgStakeRevokeAuthorization = (
  context: TxContext,
  params: MsgStakeRevokeAuthorizationParams,
) => {
  return createMsgRevoke(
    context.sender.accountAddress,
    params.granteeAddress,
    RevokeMessages.REVOKE_MSG_DELEGATE,
  )
}

/**
 * Creates a transaction for a staking MsgRevoke.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/authz#msgrevoke | MsgRevoke}
 *
 * @param context - Transaction Context
 * @param params - MsgRevoke Staking Auth Params
 * @returns Transaction with the MsgRevoke payload
 *
 */
export function createTxMsgStakeRevokeAuthorization(
  context: TxContext,
  params: MsgStakeRevokeAuthorizationParams,
) {
  const typedData = createEIP712MsgStakeRevokeAuthorization()
  const cosmosMsg = createCosmosMsgStakeRevokeAuthorization(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
