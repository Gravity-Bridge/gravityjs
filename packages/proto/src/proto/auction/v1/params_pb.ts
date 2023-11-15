// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file auction/v1/params.proto (package auction.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the GravityBridge auction module.
 *
 * @generated from message auction.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * AuctionLength is the number of blocks that the AuctionPeriod will be active
   *
   * @generated from field: uint64 auction_length = 1;
   */
  auctionLength = protoInt64.zero;

  /**
   * MinBidFee defines the required minimum fee that must be paid by bidders for their bid to be considered by the module.
   * This fee is paid out to the auction pool. This fee is separate from the standard Cosmos Tx spam protection fee.
   * This fee will not be charged unless a bid is successful.
   *
   * @generated from field: uint64 min_bid_fee = 2;
   */
  minBidFee = protoInt64.zero;

  /**
   * NonAuctionableTokens is a list of token denomss which should never be auctioned from the auction pool
   *
   * @generated from field: repeated string non_auctionable_tokens = 3;
   */
  nonAuctionableTokens: string[] = [];

  /**
   * BurnWinningBids controls if we burn the tokens of the winning bidder instead of sending them to the auction pool
   *
   * @generated from field: bool burn_winning_bids = 4;
   */
  burnWinningBids = false;

  /**
   * Enabled controls whether auctions progress as usual, or are preserved in an inactive halted state.
   * When Enabled is false, bids will also fail to be processed.
   *
   * @generated from field: bool enabled = 5;
   */
  enabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auction_length", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "min_bid_fee", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "non_auctionable_tokens", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "burn_winning_bids", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}
