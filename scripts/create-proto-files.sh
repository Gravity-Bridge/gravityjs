#!/bin/bash
# NOTE: protoc is required

# Generates compiled proto ts files from the gravity src protos via protoc

GRAVITY_FOLDER="$(pwd)/gravity-proto-src/module"
ETHERMINT_FOLDER="$(pwd)/ethermint-proto-src"
GOOGLE_FOLDER="$(pwd)/google-proto-src/"
OUT_FOLDER="$(pwd)/packages/proto/src/proto"
I="$GRAVITY_FOLDER/proto"
INCLUDES="$GRAVITY_FOLDER/third_party/proto"
ETHERMINT_INCLUDES="$ETHERMINT_FOLDER/proto"
GOOGLE_INCLUDES="$GOOGLE_FOLDER/src"
mkdir -p $OUT_FOLDER

compile-protos () {
    if [ ! $# -eq 1 ]; then
        echo "Expected 1 argument, got $#"
        exit 1
    fi

    PATH=$PATH:$(pwd)/node_modules/.bin \
    protoc \
    --es_out $OUT_FOLDER \
    --es_opt target=ts \
    --proto_path="$I" \
    --proto_path="$INCLUDES" \
    --proto_path="$ETHERMINT_INCLUDES" \
    --proto_path="$GOOGLE_INCLUDES" \
    $(find $1 -iname "*.proto")
}

# Create the compiled protos for the althea modules
compile-protos $GRAVITY_FOLDER/proto
