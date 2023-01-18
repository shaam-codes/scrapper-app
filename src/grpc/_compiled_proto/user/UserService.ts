// Original file: src/grpc/proto/user/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SignInUserRequest as _user_SignInUserRequest, SignInUserRequest__Output as _user_SignInUserRequest__Output } from '../user/SignInUserRequest';
import type { SignInUserResponse as _user_SignInUserResponse, SignInUserResponse__Output as _user_SignInUserResponse__Output } from '../user/SignInUserResponse';

export interface UserServiceClient extends grpc.Client {
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  SignInUser: grpc.handleUnaryCall<_user_SignInUserRequest__Output, _user_SignInUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  SignInUser: MethodDefinition<_user_SignInUserRequest, _user_SignInUserResponse, _user_SignInUserRequest__Output, _user_SignInUserResponse__Output>
}
