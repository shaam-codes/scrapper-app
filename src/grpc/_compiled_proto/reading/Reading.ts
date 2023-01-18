// Original file: src/grpc/proto/reading/reading.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Reading {
  'id'?: (string);
  'value'?: (number | string);
  'batch_id'?: (string);
  'detector_id'?: (string);
  'is_active'?: (boolean);
  'requested_at'?: (_google_protobuf_Timestamp | null);
  'received_at'?: (_google_protobuf_Timestamp | null);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'is_corrupted'?: (boolean);
}

export interface Reading__Output {
  'id': (string);
  'value': (number);
  'batch_id': (string);
  'detector_id': (string);
  'is_active': (boolean);
  'requested_at': (_google_protobuf_Timestamp__Output | null);
  'received_at': (_google_protobuf_Timestamp__Output | null);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'is_corrupted': (boolean);
}
