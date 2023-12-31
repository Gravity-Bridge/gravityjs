// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file auction/v1/genesis.proto (package auction.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Auction, AuctionPeriod } from "./auction_pb.js";

/**
 * GenesisState defines the auction module's genesis state.
 *
 * @generated from message auction.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: auction.v1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: auction.v1.AuctionPeriod active_period = 2;
   */
  activePeriod?: AuctionPeriod;

  /**
   * @generated from field: repeated auction.v1.Auction active_auctions = 3;
   */
  activeAuctions: Auction[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auction.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "active_period", kind: "message", T: AuctionPeriod },
    { no: 3, name: "active_auctions", kind: "message", T: Auction, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

