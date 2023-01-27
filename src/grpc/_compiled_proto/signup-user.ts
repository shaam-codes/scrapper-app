import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    SignUpUserRequest: MessageTypeDefinition
    SignUpUserResponse: MessageTypeDefinition
  }
  common: {
    successResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  user: {
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
}

