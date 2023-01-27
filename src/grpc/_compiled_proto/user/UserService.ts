// Original file: src/grpc/proto/user/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserRequest as _auth_GetUserRequest, GetUserRequest__Output as _auth_GetUserRequest__Output } from '../auth/GetUserRequest';
import type { GetUserResponse as _auth_GetUserResponse, GetUserResponse__Output as _auth_GetUserResponse__Output } from '../auth/GetUserResponse';
import type { SignInUserRequest as _user_SignInUserRequest, SignInUserRequest__Output as _user_SignInUserRequest__Output } from '../user/SignInUserRequest';
import type { SignInUserResponse as _user_SignInUserResponse, SignInUserResponse__Output as _user_SignInUserResponse__Output } from '../user/SignInUserResponse';
import type { SignUpUserRequest as _auth_SignUpUserRequest, SignUpUserRequest__Output as _auth_SignUpUserRequest__Output } from '../auth/SignUpUserRequest';
import type { SignUpUserResponse as _auth_SignUpUserResponse, SignUpUserResponse__Output as _auth_SignUpUserResponse__Output } from '../auth/SignUpUserResponse';

export interface UserServiceClient extends grpc.Client {
  GetUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _auth_SignUpUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserRequest, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserRequest, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_auth_GetUserRequest__Output, _auth_GetUserResponse>;
  
  SignInUser: grpc.handleUnaryCall<_user_SignInUserRequest__Output, _user_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_auth_SignUpUserRequest__Output, _auth_SignUpUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  GetUser: MethodDefinition<_auth_GetUserRequest, _auth_GetUserResponse, _auth_GetUserRequest__Output, _auth_GetUserResponse__Output>
  SignInUser: MethodDefinition<_user_SignInUserRequest, _user_SignInUserResponse, _user_SignInUserRequest__Output, _user_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_auth_SignUpUserRequest, _auth_SignUpUserResponse, _auth_SignUpUserRequest__Output, _auth_SignUpUserResponse__Output>
}
