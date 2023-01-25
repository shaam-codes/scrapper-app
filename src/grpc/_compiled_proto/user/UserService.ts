// Original file: src/grpc/proto/user/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SignInUserRequest as _user_SignInUserRequest, SignInUserRequest__Output as _user_SignInUserRequest__Output } from '../user/SignInUserRequest';
import type { SignInUserResponse as _user_SignInUserResponse, SignInUserResponse__Output as _user_SignInUserResponse__Output } from '../user/SignInUserResponse';
import type { SignUpUserInput as _auth_SignUpUserInput, SignUpUserInput__Output as _auth_SignUpUserInput__Output } from '../auth/SignUpUserInput';
import type { SignUpUserResponse as _auth_SignUpUserResponse, SignUpUserResponse__Output as _auth_SignUpUserResponse__Output } from '../auth/SignUpUserResponse';

export interface UserServiceClient extends grpc.Client {
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _user_SignInUserRequest, callback: grpc.requestCallback<_user_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  SignInUser: grpc.handleUnaryCall<_user_SignInUserRequest__Output, _user_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_auth_SignUpUserInput__Output, _auth_SignUpUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  SignInUser: MethodDefinition<_user_SignInUserRequest, _user_SignInUserResponse, _user_SignInUserRequest__Output, _user_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_auth_SignUpUserInput, _auth_SignUpUserResponse, _auth_SignUpUserInput__Output, _auth_SignUpUserResponse__Output>
}
