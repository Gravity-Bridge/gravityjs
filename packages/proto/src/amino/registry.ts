import {
  createDefaultAminoConverters as createDefaultCosmosAminoConverters,
  AminoTypes as AminoTypesClass,
} from '@cosmjs/stargate'
import {
  createGravityAminoConverters,
  createAuctionAminoConverters,
} from '../messages/index'

// TODO: Add missing Amino types (see x/**/codec.go)

export function createDefaultAminoConverters() {
  return {
    ...createDefaultCosmosAminoConverters(),

    ...createGravityAminoConverters(),
    ...createAuctionAminoConverters(),
  }
}

export const AminoTypes = new AminoTypesClass(createDefaultAminoConverters())
