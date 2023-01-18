// Original file: src/grpc/proto/user/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'first_name'?: (string);
  'last_name'?: (string);
  'email'?: (string);
  'role_id'?: (string);
  'organization_id'?: (number);
  'is_active'?: (boolean);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
  '_organization_id'?: "organization_id";
}

export interface User__Output {
  'id': (string);
  'first_name': (string);
  'last_name': (string);
  'email': (string);
  'role_id': (string);
  'organization_id'?: (number);
  'is_active': (boolean);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
  '_organization_id': "organization_id";
}
