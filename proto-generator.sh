#!/bin/bash

rm -rf _proto/
yarn proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=_proto/ proto/*.proto
