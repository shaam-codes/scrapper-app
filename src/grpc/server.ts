import * as grpc from '@grpc/grpc-js';

import {signupHandler} from '../infrastructure/controllers/user-controller';

import {getPackageDefinition} from './utils/package';
import {ProtoGrpcType} from './_compiled_proto/service';
import {SignUpUserInput__Output} from './_compiled_proto/auth/SignUpUserInput';
import {SignUpUserResponse} from './_compiled_proto/auth/SignUpUserResponse';


const userPackageDef = getPackageDefinition('user/service.proto');

const userProto = grpc.loadPackageDefinition(
  userPackageDef,
) as unknown as ProtoGrpcType;

const userPackage = userProto.user;

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  SignUpUser: (
    req: grpc.ServerUnaryCall<SignUpUserInput__Output, SignUpUserResponse>,
    res: grpc.sendUnaryData<SignUpUserResponse>,
  ) => signupHandler(req, res),
});

export default server;

