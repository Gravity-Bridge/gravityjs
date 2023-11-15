import { createMsgWithdrawValidatorCommission as protoMsgWithdrawValidatorCommission } from '@gravity-bridge/proto'

import {
  generateTypes,
  MSG_WITHDRAW_VALIDATOR_COMMISSION_TYPES,
  createMsgWithdrawValidatorCommission,
} from '@gravity-bridge/eip712'
import {
  MsgWithdrawValidatorCommissionParams,
  createTxMsgWithdrawValidatorCommission,
} from './withdrawValidatorCommission'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const validatorAddress = TestUtils.addrVal1

const params: MsgWithdrawValidatorCommissionParams = {
  validatorAddress,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_WITHDRAW_VALIDATOR_COMMISSION_TYPES)
    const message = createMsgWithdrawValidatorCommission(
      params.validatorAddress,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgWithdrawValidatorCommission(
      params.validatorAddress,
    )

    const payload = createTxMsgWithdrawValidatorCommission(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
