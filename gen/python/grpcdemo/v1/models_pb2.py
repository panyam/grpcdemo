# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: grpcdemo/v1/models.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18grpcdemo/v1/models.proto\x12\x0bgrpcdemo.v1\x1a\x1fgoogle/protobuf/timestamp.proto\"$\n\x08Location\x12\x18\n\x07\x61\x64\x64ress\x18\x01 \x01(\tR\x07\x61\x64\x64ress\"\xe2\x01\n\x06\x41rtist\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\x39\n\nupdated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tupdatedAt\x12\x0e\n\x02id\x18\x03 \x01(\tR\x02id\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12>\n\rdate_of_birth\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x0b\x64\x61teOfBirth\"\xde\x01\n\x05\x41lbum\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\x39\n\nupdated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tupdatedAt\x12\x0e\n\x02id\x18\x03 \x01(\tR\x02id\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12;\n\x0breleased_on\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\nreleasedOn\"\xd4\x01\n\x05\x45vent\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\x39\n\nupdated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tupdatedAt\x12\x0e\n\x02id\x18\x03 \x01(\tR\x02id\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\x31\n\x08location\x18\x05 \x01(\x0b\x32\x15.grpcdemo.v1.LocationR\x08location\"\xa6\x01\n\x04\x43hat\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\x39\n\nupdated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tupdatedAt\x12\x0e\n\x02id\x18\x03 \x01(\tR\x02id\x12\x18\n\x07\x63reator\x18\x04 \x01(\tR\x07\x63reatorB\xa4\x01\n\x0f\x63om.grpcdemo.v1B\x0bModelsProtoP\x01Z7github.com/bufbuild/buf-tour/gen/grpcdemo/v1;grpcdemov1\xa2\x02\x03GXX\xaa\x02\x0bGrpcdemo.V1\xca\x02\x0bGrpcdemo\\V1\xe2\x02\x17Grpcdemo\\V1\\GPBMetadata\xea\x02\x0cGrpcdemo::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'grpcdemo.v1.models_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\017com.grpcdemo.v1B\013ModelsProtoP\001Z7github.com/bufbuild/buf-tour/gen/grpcdemo/v1;grpcdemov1\242\002\003GXX\252\002\013Grpcdemo.V1\312\002\013Grpcdemo\\V1\342\002\027Grpcdemo\\V1\\GPBMetadata\352\002\014Grpcdemo::V1'
  _globals['_LOCATION']._serialized_start=74
  _globals['_LOCATION']._serialized_end=110
  _globals['_ARTIST']._serialized_start=113
  _globals['_ARTIST']._serialized_end=339
  _globals['_ALBUM']._serialized_start=342
  _globals['_ALBUM']._serialized_end=564
  _globals['_EVENT']._serialized_start=567
  _globals['_EVENT']._serialized_end=779
  _globals['_CHAT']._serialized_start=782
  _globals['_CHAT']._serialized_end=948
# @@protoc_insertion_point(module_scope)
