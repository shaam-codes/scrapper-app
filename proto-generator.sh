#!/bin/bash

rm -rf ./src/grpc/_compiled_proto
yarn proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=./src/grpc/_compiled_proto/ ./src/grpc/proto/**/*.proto
