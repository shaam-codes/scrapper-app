// Original file: src/grpc/proto/batch/batch.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Batch {
  'id'?: (string);
  'namme'?: (string);
  'sectionId'?: (string);
  'isActive'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Batch__Output {
  'id': (string);
  'namme': (string);
  'sectionId': (string);
  'isActive': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
