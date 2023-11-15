// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file auction/v1/auction.proto (package auction.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 *
 * @generated from message auction.v1.AuctionPeriod
 */
export class AuctionPeriod extends Message<AuctionPeriod> {
  /**
   * Block height at which the AuctionPeriod starts.
   *
   * @generated from field: uint64 start_block_height = 1;
   */
  startBlockHeight = protoInt64.zero;

  /**
   * Block height at which the AuctionPeriod end.
   *
   * @generated from field: uint64 end_block_height = 2;
   */
  endBlockHeight = protoInt64.zero;

  constructor(data?: PartialMessage<AuctionPeriod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.AuctionPeriod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "end_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionPeriod {
    return new AuctionPeriod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionPeriod {
    return new AuctionPeriod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionPeriod {
    return new AuctionPeriod().fromJsonString(jsonString, options);
  }

  static equals(a: AuctionPeriod | PlainMessage<AuctionPeriod> | undefined, b: AuctionPeriod | PlainMessage<AuctionPeriod> | undefined): boolean {
    return proto3.util.equals(AuctionPeriod, a, b);
  }
}

/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 *
 * @generated from message auction.v1.Auction
 */
export class Auction extends Message<Auction> {
  /**
   * Unique identifier for the Auction.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * Amount being auctioned.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * Highest bid on the Auction.
   *
   * @generated from field: auction.v1.Bid highest_bid = 3;
   */
  highestBid?: Bid;

  constructor(data?: PartialMessage<Auction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.Auction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "highest_bid", kind: "message", T: Bid },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auction {
    return new Auction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auction {
    return new Auction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auction {
    return new Auction().fromJsonString(jsonString, options);
  }

  static equals(a: Auction | PlainMessage<Auction> | undefined, b: Auction | PlainMessage<Auction> | undefined): boolean {
    return proto3.util.equals(Auction, a, b);
  }
}

/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 *
 * @generated from message auction.v1.Bid
 */
export class Bid extends Message<Bid> {
  /**
   * Amount of the bid.
   *
   * @generated from field: uint64 bid_amount = 1;
   */
  bidAmount = protoInt64.zero;

  /**
   * Address of the bidder.
   *
   * @generated from field: string bidder_address = 2;
   */
  bidderAddress = "";

  constructor(data?: PartialMessage<Bid>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.Bid";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bid_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "bidder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bid {
    return new Bid().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bid {
    return new Bid().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bid {
    return new Bid().fromJsonString(jsonString, options);
  }

  static equals(a: Bid | PlainMessage<Bid> | undefined, b: Bid | PlainMessage<Bid> | undefined): boolean {
    return proto3.util.equals(Bid, a, b);
  }
}

/**
 * AuctionId enables easy storage and retrieval of the most recently used AuctionId
 *
 * @generated from message auction.v1.AuctionId
 */
export class AuctionId extends Message<AuctionId> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<AuctionId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.AuctionId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionId {
    return new AuctionId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionId {
    return new AuctionId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionId {
    return new AuctionId().fromJsonString(jsonString, options);
  }

  static equals(a: AuctionId | PlainMessage<AuctionId> | undefined, b: AuctionId | PlainMessage<AuctionId> | undefined): boolean {
    return proto3.util.equals(AuctionId, a, b);
  }
}
