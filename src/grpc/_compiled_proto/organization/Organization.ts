// Original file: src/grpc/proto/organization/organization.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Organization {
  'id'?: (string);
  'namme'?: (string);
  'address'?: (string);
  'region'?: (string);
  'isActive'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Organization__Output {
  'id': (string);
  'namme': (string);
  'address': (string);
  'region': (string);
  'isActive': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
