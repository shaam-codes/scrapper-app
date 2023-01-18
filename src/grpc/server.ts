import path from 'path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import {ProtoGrpcType} from './_compiled_proto/service';
import {options} from './options';

// following codes need to move to a util class

const getPackageDefinition = (protoFileName: string, protoRootPath = 'proto') => {
  return protoLoader.loadSync(
    path.resolve(__dirname, protoRootPath, protoFileName),
    options,
  );
};

const userPackageDef = getPackageDefinition('user/service.proto');

const userProto = grpc.loadPackageDefinition(
  userPackageDef,
) as unknown as ProtoGrpcType;

const userPackage = userProto.user;

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  SignInUser: () => {},
});

export default server;

