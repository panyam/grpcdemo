// @generated by protoc-gen-connect-web v0.8.1
// @generated from file grpcdemo/v1/albums.proto (package grpcdemo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// option go_package = "github.com/panyam/grpcdemo/protos";

import { CreateAlbumRequest, CreateAlbumResponse, DeleteAlbumRequest, DeleteAlbumResponse, GetAlbumRequest, GetAlbumResponse, GetAlbumsRequest, GetAlbumsResponse, ListAlbumsRequest, ListAlbumsResponse, UpdateAlbumRequest, UpdateAlbumResponse } from "./albums_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * The main Album server, serving as an entry into managing album lifecycles
 * and retrieving them
 *
 * @generated from service grpcdemo.v1.AlbumService
 */
export const AlbumService = {
  typeName: "grpcdemo.v1.AlbumService",
  methods: {
    /**
     *
     * Create a new Album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.CreateAlbum
     */
    createAlbum: {
      name: "CreateAlbum",
      I: CreateAlbumRequest,
      O: CreateAlbumResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Gets a single album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.GetAlbum
     */
    getAlbum: {
      name: "GetAlbum",
      I: GetAlbumRequest,
      O: GetAlbumResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Batch gets multiple albums
     *
     * @generated from rpc grpcdemo.v1.AlbumService.GetAlbums
     */
    getAlbums: {
      name: "GetAlbums",
      I: GetAlbumsRequest,
      O: GetAlbumsResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Updates specific fields of an Album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.UpdateAlbum
     */
    updateAlbum: {
      name: "UpdateAlbum",
      I: UpdateAlbumRequest,
      O: UpdateAlbumResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Deletes an album from our system.
     *
     * @generated from rpc grpcdemo.v1.AlbumService.DeleteAlbum
     */
    deleteAlbum: {
      name: "DeleteAlbum",
      I: DeleteAlbumRequest,
      O: DeleteAlbumResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Finds and retrieves albums matching the particular criteria.
     *
     * @generated from rpc grpcdemo.v1.AlbumService.ListAlbums
     */
    listAlbums: {
      name: "ListAlbums",
      I: ListAlbumsRequest,
      O: ListAlbumsResponse,
      kind: MethodKind.Unary,
    },
  }
};
