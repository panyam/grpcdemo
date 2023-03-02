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
export declare const AlbumService: {
  readonly typeName: "grpcdemo.v1.AlbumService",
  readonly methods: {
    /**
     *
     * Create a new Album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.CreateAlbum
     */
    readonly createAlbum: {
      readonly name: "CreateAlbum",
      readonly I: typeof CreateAlbumRequest,
      readonly O: typeof CreateAlbumResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Gets a single album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.GetAlbum
     */
    readonly getAlbum: {
      readonly name: "GetAlbum",
      readonly I: typeof GetAlbumRequest,
      readonly O: typeof GetAlbumResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Batch gets multiple albums
     *
     * @generated from rpc grpcdemo.v1.AlbumService.GetAlbums
     */
    readonly getAlbums: {
      readonly name: "GetAlbums",
      readonly I: typeof GetAlbumsRequest,
      readonly O: typeof GetAlbumsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Updates specific fields of an Album
     *
     * @generated from rpc grpcdemo.v1.AlbumService.UpdateAlbum
     */
    readonly updateAlbum: {
      readonly name: "UpdateAlbum",
      readonly I: typeof UpdateAlbumRequest,
      readonly O: typeof UpdateAlbumResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Deletes an album from our system.
     *
     * @generated from rpc grpcdemo.v1.AlbumService.DeleteAlbum
     */
    readonly deleteAlbum: {
      readonly name: "DeleteAlbum",
      readonly I: typeof DeleteAlbumRequest,
      readonly O: typeof DeleteAlbumResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Finds and retrieves albums matching the particular criteria.
     *
     * @generated from rpc grpcdemo.v1.AlbumService.ListAlbums
     */
    readonly listAlbums: {
      readonly name: "ListAlbums",
      readonly I: typeof ListAlbumsRequest,
      readonly O: typeof ListAlbumsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
