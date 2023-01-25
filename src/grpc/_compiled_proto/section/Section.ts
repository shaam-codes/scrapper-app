// Original file: src/grpc/proto/section/section.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Section {
  'id'?: (string);
  'namme'?: (string);
  'description'?: (string);
  'organizationId'?: (string);
  'isActive'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Section__Output {
  'id': (string);
  'namme': (string);
  'description': (string);
  'organizationId': (string);
  'isActive': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
