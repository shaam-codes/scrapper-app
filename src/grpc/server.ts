import * as grpc from '@grpc/grpc-js';

import {signupHandler, getUserHandler} from '../infrastructure/controllers/user-controller';

import {getPackageDefinition} from './utils/package';
import {ProtoGrpcType} from './_compiled_proto/service';
import {SignUpUserRequest__Output} from './_compiled_proto/auth/SignUpUserRequest';
import { SignUpUserResponse } from './_compiled_proto/auth/SignUpUserResponse';
import { GetUserResponse } from './_compiled_proto/auth/GetUserResponse';
import {GetUserRequest__Output} from './_compiled_proto/auth/GetUserRequest';

const userPackageDef = getPackageDefinition('user/service.proto');

const userProto = grpc.loadPackageDefinition(
  userPackageDef,
) as unknown as ProtoGrpcType;

const userPackage = userProto.user;

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  SignUpUser: (
    req: grpc.ServerUnaryCall<SignUpUserRequest__Output, SignUpUserResponse>,
    res: grpc.sendUnaryData<SignUpUserResponse>,
  ) => signupHandler(req, res),
  GetUser: (
    req: grpc.ServerUnaryCall<GetUserRequest__Output, GetUserResponse>,
    res: grpc.sendUnaryData<GetUserResponse>,
  ) => getUserHandler(req, res),
});

export default server;

