// Original file: src/grpc/proto/user/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'email'?: (string);
  'roleId'?: (string);
  'organizationId'?: (string);
  'isActive'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface User__Output {
  'id': (string);
  'firstName': (string);
  'lastName': (string);
  'email': (string);
  'roleId': (string);
  'organizationId': (string);
  'isActive': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
