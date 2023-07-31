// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/vesting/v1/tx.proto (package canto.vesting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting_pb.js";

/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 *
 * @generated from message canto.vesting.v1.MsgCreateClawbackVestingAccount
 */
export class MsgCreateClawbackVestingAccount extends Message<MsgCreateClawbackVestingAccount> {
  /**
   * from_address specifies the account to provide the funds and sign the
   * clawback request
   *
   * @generated from field: string from_address = 1;
   */
  fromAddress = "";

  /**
   * to_address specifies the account to receive the funds
   *
   * @generated from field: string to_address = 2;
   */
  toAddress = "";

  /**
   * start_time defines the time at which the vesting period begins
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * lockup_periods defines the unlocking schedule relative to the start_time
   *
   * @generated from field: repeated cosmos.vesting.v1beta1.Period lockup_periods = 4;
   */
  lockupPeriods: Period[] = [];

  /**
   * vesting_periods defines thevesting schedule relative to the start_time
   *
   * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 5;
   */
  vestingPeriods: Period[] = [];

  /**
   * merge specifies a the creation mechanism for existing
   * ClawbackVestingAccounts. If true, merge this new grant into an existing
   * ClawbackVestingAccount, or create it if it does not exist. If false,
   * creates a new account. New grants to an existing account must be from the
   * same from_address.
   *
   * @generated from field: bool merge = 6;
   */
  merge = false;

  constructor(data?: PartialMessage<MsgCreateClawbackVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.vesting.v1.MsgCreateClawbackVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
    { no: 4, name: "lockup_periods", kind: "message", T: Period, repeated: true },
    { no: 5, name: "vesting_periods", kind: "message", T: Period, repeated: true },
    { no: 6, name: "merge", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClawbackVestingAccount | PlainMessage<MsgCreateClawbackVestingAccount> | undefined, b: MsgCreateClawbackVestingAccount | PlainMessage<MsgCreateClawbackVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgCreateClawbackVestingAccount, a, b);
  }
}

/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 *
 * @generated from message canto.vesting.v1.MsgCreateClawbackVestingAccountResponse
 */
export class MsgCreateClawbackVestingAccountResponse extends Message<MsgCreateClawbackVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgCreateClawbackVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.vesting.v1.MsgCreateClawbackVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClawbackVestingAccountResponse | PlainMessage<MsgCreateClawbackVestingAccountResponse> | undefined, b: MsgCreateClawbackVestingAccountResponse | PlainMessage<MsgCreateClawbackVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateClawbackVestingAccountResponse, a, b);
  }
}

/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 *
 * @generated from message canto.vesting.v1.MsgClawback
 */
export class MsgClawback extends Message<MsgClawback> {
  /**
   * funder_address is the address which funded the account
   *
   * @generated from field: string funder_address = 1;
   */
  funderAddress = "";

  /**
   * account_address is the address of the ClawbackVestingAccount to claw back
   * from.
   *
   * @generated from field: string account_address = 2;
   */
  accountAddress = "";

  /**
   * dest_address specifies where the clawed-back tokens should be transferred
   * to. If empty, the tokens will be transferred back to the original funder of
   * the account.
   *
   * @generated from field: string dest_address = 3;
   */
  destAddress = "";

  constructor(data?: PartialMessage<MsgClawback>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.vesting.v1.MsgClawback";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dest_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClawback {
    return new MsgClawback().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClawback {
    return new MsgClawback().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClawback {
    return new MsgClawback().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClawback | PlainMessage<MsgClawback> | undefined, b: MsgClawback | PlainMessage<MsgClawback> | undefined): boolean {
    return proto3.util.equals(MsgClawback, a, b);
  }
}

/**
 * MsgClawbackResponse defines the MsgClawback response type.
 *
 * @generated from message canto.vesting.v1.MsgClawbackResponse
 */
export class MsgClawbackResponse extends Message<MsgClawbackResponse> {
  constructor(data?: PartialMessage<MsgClawbackResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.vesting.v1.MsgClawbackResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClawbackResponse | PlainMessage<MsgClawbackResponse> | undefined, b: MsgClawbackResponse | PlainMessage<MsgClawbackResponse> | undefined): boolean {
    return proto3.util.equals(MsgClawbackResponse, a, b);
  }
}
