# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: grpcdemo/v1/albums.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from grpcdemo.v1 import models_pb2 as grpcdemo_dot_v1_dot_models__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18grpcdemo/v1/albums.proto\x12\x0bgrpcdemo.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x18grpcdemo/v1/models.proto\">\n\x12\x43reateAlbumRequest\x12(\n\x05\x61lbum\x18\x01 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x05\x61lbum\"?\n\x13\x43reateAlbumResponse\x12(\n\x05\x61lbum\x18\x01 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x05\x61lbum\"{\n\x12UpdateAlbumRequest\x12(\n\x05\x61lbum\x18\x01 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x05\x61lbum\x12;\n\x0bupdate_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMaskR\nupdateMask\"?\n\x13UpdateAlbumResponse\x12(\n\x05\x61lbum\x18\x01 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x05\x61lbum\"!\n\x0fGetAlbumRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\">\n\x10GetAlbumResponse\x12*\n\x06\x61lbums\x18\x01 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x06\x61lbums\"$\n\x10GetAlbumsRequest\x12\x10\n\x03ids\x18\x01 \x03(\tR\x03ids\"\xa6\x01\n\x11GetAlbumsResponse\x12\x42\n\x06\x61lbums\x18\x01 \x03(\x0b\x32*.grpcdemo.v1.GetAlbumsResponse.AlbumsEntryR\x06\x61lbums\x1aM\n\x0b\x41lbumsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12(\n\x05value\x18\x02 \x01(\x0b\x32\x12.grpcdemo.v1.AlbumR\x05value:\x02\x38\x01\"D\n\x11ListAlbumsRequest\x12\x19\n\x08page_key\x18\x01 \x01(\tR\x07pageKey\x12\x14\n\x05\x63ount\x18\x02 \x01(\x05R\x05\x63ount\"d\n\x12ListAlbumsResponse\x12*\n\x06\x61lbums\x18\x01 \x03(\x0b\x32\x12.grpcdemo.v1.AlbumR\x06\x61lbums\x12\"\n\rnext_page_key\x18\x02 \x03(\tR\x0bnextPageKey\"$\n\x12\x44\x65leteAlbumRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"\x15\n\x13\x44\x65leteAlbumResponse2\x92\x05\n\x0c\x41lbumService\x12k\n\x0b\x43reateAlbum\x12\x1f.grpcdemo.v1.CreateAlbumRequest\x1a .grpcdemo.v1.CreateAlbumResponse\"\x19\x82\xd3\xe4\x93\x02\x13:\x05\x61lbum\"\n/v1/albums\x12\x62\n\x08GetAlbum\x12\x1c.grpcdemo.v1.GetAlbumRequest\x1a\x1d.grpcdemo.v1.GetAlbumResponse\"\x19\x82\xd3\xe4\x93\x02\x13\x12\x11/v1/albums/{id=*}\x12g\n\tGetAlbums\x12\x1d.grpcdemo.v1.GetAlbumsRequest\x1a\x1e.grpcdemo.v1.GetAlbumsResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\x12\x13/v1/albums:batchGet\x12x\n\x0bUpdateAlbum\x12\x1f.grpcdemo.v1.UpdateAlbumRequest\x1a .grpcdemo.v1.UpdateAlbumResponse\"&\x82\xd3\xe4\x93\x02 :\x05\x61lbum2\x17/v1/albums/{album.id=*}\x12k\n\x0b\x44\x65leteAlbum\x12\x1f.grpcdemo.v1.DeleteAlbumRequest\x1a .grpcdemo.v1.DeleteAlbumResponse\"\x19\x82\xd3\xe4\x93\x02\x13*\x11/v1/albums/{id=*}\x12\x61\n\nListAlbums\x12\x1e.grpcdemo.v1.ListAlbumsRequest\x1a\x1f.grpcdemo.v1.ListAlbumsResponse\"\x12\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/albumsB\xa4\x01\n\x0f\x63om.grpcdemo.v1B\x0b\x41lbumsProtoP\x01Z7github.com/bufbuild/buf-tour/gen/grpcdemo/v1;grpcdemov1\xa2\x02\x03GXX\xaa\x02\x0bGrpcdemo.V1\xca\x02\x0bGrpcdemo\\V1\xe2\x02\x17Grpcdemo\\V1\\GPBMetadata\xea\x02\x0cGrpcdemo::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'grpcdemo.v1.albums_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\017com.grpcdemo.v1B\013AlbumsProtoP\001Z7github.com/bufbuild/buf-tour/gen/grpcdemo/v1;grpcdemov1\242\002\003GXX\252\002\013Grpcdemo.V1\312\002\013Grpcdemo\\V1\342\002\027Grpcdemo\\V1\\GPBMetadata\352\002\014Grpcdemo::V1'
  _GETALBUMSRESPONSE_ALBUMSENTRY._options = None
  _GETALBUMSRESPONSE_ALBUMSENTRY._serialized_options = b'8\001'
  _ALBUMSERVICE.methods_by_name['CreateAlbum']._options = None
  _ALBUMSERVICE.methods_by_name['CreateAlbum']._serialized_options = b'\202\323\344\223\002\023:\005album\"\n/v1/albums'
  _ALBUMSERVICE.methods_by_name['GetAlbum']._options = None
  _ALBUMSERVICE.methods_by_name['GetAlbum']._serialized_options = b'\202\323\344\223\002\023\022\021/v1/albums/{id=*}'
  _ALBUMSERVICE.methods_by_name['GetAlbums']._options = None
  _ALBUMSERVICE.methods_by_name['GetAlbums']._serialized_options = b'\202\323\344\223\002\025\022\023/v1/albums:batchGet'
  _ALBUMSERVICE.methods_by_name['UpdateAlbum']._options = None
  _ALBUMSERVICE.methods_by_name['UpdateAlbum']._serialized_options = b'\202\323\344\223\002 :\005album2\027/v1/albums/{album.id=*}'
  _ALBUMSERVICE.methods_by_name['DeleteAlbum']._options = None
  _ALBUMSERVICE.methods_by_name['DeleteAlbum']._serialized_options = b'\202\323\344\223\002\023*\021/v1/albums/{id=*}'
  _ALBUMSERVICE.methods_by_name['ListAlbums']._options = None
  _ALBUMSERVICE.methods_by_name['ListAlbums']._serialized_options = b'\202\323\344\223\002\014\022\n/v1/albums'
  _globals['_CREATEALBUMREQUEST']._serialized_start=131
  _globals['_CREATEALBUMREQUEST']._serialized_end=193
  _globals['_CREATEALBUMRESPONSE']._serialized_start=195
  _globals['_CREATEALBUMRESPONSE']._serialized_end=258
  _globals['_UPDATEALBUMREQUEST']._serialized_start=260
  _globals['_UPDATEALBUMREQUEST']._serialized_end=383
  _globals['_UPDATEALBUMRESPONSE']._serialized_start=385
  _globals['_UPDATEALBUMRESPONSE']._serialized_end=448
  _globals['_GETALBUMREQUEST']._serialized_start=450
  _globals['_GETALBUMREQUEST']._serialized_end=483
  _globals['_GETALBUMRESPONSE']._serialized_start=485
  _globals['_GETALBUMRESPONSE']._serialized_end=547
  _globals['_GETALBUMSREQUEST']._serialized_start=549
  _globals['_GETALBUMSREQUEST']._serialized_end=585
  _globals['_GETALBUMSRESPONSE']._serialized_start=588
  _globals['_GETALBUMSRESPONSE']._serialized_end=754
  _globals['_GETALBUMSRESPONSE_ALBUMSENTRY']._serialized_start=677
  _globals['_GETALBUMSRESPONSE_ALBUMSENTRY']._serialized_end=754
  _globals['_LISTALBUMSREQUEST']._serialized_start=756
  _globals['_LISTALBUMSREQUEST']._serialized_end=824
  _globals['_LISTALBUMSRESPONSE']._serialized_start=826
  _globals['_LISTALBUMSRESPONSE']._serialized_end=926
  _globals['_DELETEALBUMREQUEST']._serialized_start=928
  _globals['_DELETEALBUMREQUEST']._serialized_end=964
  _globals['_DELETEALBUMRESPONSE']._serialized_start=966
  _globals['_DELETEALBUMRESPONSE']._serialized_end=987
  _globals['_ALBUMSERVICE']._serialized_start=990
  _globals['_ALBUMSERVICE']._serialized_end=1648
# @@protoc_insertion_point(module_scope)
