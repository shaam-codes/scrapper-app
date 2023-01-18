// Original file: src/grpc/proto/section/section.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Section {
  'id'?: (string);
  'namme'?: (string);
  'description'?: (string);
  'organization_id'?: (string);
  'is_active'?: (boolean);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Section__Output {
  'id': (string);
  'namme': (string);
  'description': (string);
  'organization_id': (string);
  'is_active': (boolean);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
