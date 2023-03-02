/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { FieldMask } from "./google/protobuf/field_mask";
import { Artist } from "./models";

/** The request for (partially) updating an Artist. */
export interface CreateArtistRequest {
  /** Artist being updated */
  artist?: Artist;
}

/** The request for (partially) updating an Artist. */
export interface UpdateArtistRequest {
  /** Artist being updated */
  artist?: Artist;
  /** Mask of fields being updated in this Artist to make partial changes. */
  updateMask?: string[];
}

/** Batch gets multiple artists. */
export interface GetArtistsRequest {
  ids: string[];
}

/** Response for an artist batch get. */
export interface GetArtistsResponse {
  artists: { [key: string]: Artist };
}

export interface GetArtistsResponse_ArtistsEntry {
  key: string;
  value?: Artist;
}

/** An artist search request.  For now only paginations params are provided. */
export interface ListArtistsRequest {
  /**
   * Instead of an offset an abstract  "page" key is provided that offers
   * an opaque "pointer" into some offset in a result set.
   */
  pageKey: string;
  /** Number of results to return. */
  count: number;
}

export interface ListArtistsResponse {
  /** The list of artists found as part of this response. */
  artists: Artist[];
  /**
   * The key/pointer string that subsequent List requests should pass to
   * continue the pagination.
   */
  nextPageKey: string[];
}

/** Request to delete an artist. */
export interface DeleteArtistRequest {
  /** ID of the artist to be deleted. */
  id: string;
}

function createBaseCreateArtistRequest(): CreateArtistRequest {
  return { artist: undefined };
}

export const CreateArtistRequest = {
  encode(message: CreateArtistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.artist !== undefined) {
      Artist.encode(message.artist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateArtistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateArtistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.artist = Artist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateArtistRequest {
    return { artist: isSet(object.artist) ? Artist.fromJSON(object.artist) : undefined };
  },

  toJSON(message: CreateArtistRequest): unknown {
    const obj: any = {};
    message.artist !== undefined && (obj.artist = message.artist ? Artist.toJSON(message.artist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateArtistRequest>, I>>(object: I): CreateArtistRequest {
    const message = createBaseCreateArtistRequest();
    message.artist = (object.artist !== undefined && object.artist !== null)
      ? Artist.fromPartial(object.artist)
      : undefined;
    return message;
  },
};

function createBaseUpdateArtistRequest(): UpdateArtistRequest {
  return { artist: undefined, updateMask: undefined };
}

export const UpdateArtistRequest = {
  encode(message: UpdateArtistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.artist !== undefined) {
      Artist.encode(message.artist, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateArtistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateArtistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.artist = Artist.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateArtistRequest {
    return {
      artist: isSet(object.artist) ? Artist.fromJSON(object.artist) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateArtistRequest): unknown {
    const obj: any = {};
    message.artist !== undefined && (obj.artist = message.artist ? Artist.toJSON(message.artist) : undefined);
    message.updateMask !== undefined && (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateArtistRequest>, I>>(object: I): UpdateArtistRequest {
    const message = createBaseUpdateArtistRequest();
    message.artist = (object.artist !== undefined && object.artist !== null)
      ? Artist.fromPartial(object.artist)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseGetArtistsRequest(): GetArtistsRequest {
  return { ids: [] };
}

export const GetArtistsRequest = {
  encode(message: GetArtistsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetArtistsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetArtistsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetArtistsRequest {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetArtistsRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetArtistsRequest>, I>>(object: I): GetArtistsRequest {
    const message = createBaseGetArtistsRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetArtistsResponse(): GetArtistsResponse {
  return { artists: {} };
}

export const GetArtistsResponse = {
  encode(message: GetArtistsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.artists).forEach(([key, value]) => {
      GetArtistsResponse_ArtistsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetArtistsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetArtistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GetArtistsResponse_ArtistsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.artists[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetArtistsResponse {
    return {
      artists: isObject(object.artists)
        ? Object.entries(object.artists).reduce<{ [key: string]: Artist }>((acc, [key, value]) => {
          acc[key] = Artist.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetArtistsResponse): unknown {
    const obj: any = {};
    obj.artists = {};
    if (message.artists) {
      Object.entries(message.artists).forEach(([k, v]) => {
        obj.artists[k] = Artist.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetArtistsResponse>, I>>(object: I): GetArtistsResponse {
    const message = createBaseGetArtistsResponse();
    message.artists = Object.entries(object.artists ?? {}).reduce<{ [key: string]: Artist }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Artist.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetArtistsResponse_ArtistsEntry(): GetArtistsResponse_ArtistsEntry {
  return { key: "", value: undefined };
}

export const GetArtistsResponse_ArtistsEntry = {
  encode(message: GetArtistsResponse_ArtistsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Artist.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetArtistsResponse_ArtistsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetArtistsResponse_ArtistsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Artist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetArtistsResponse_ArtistsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Artist.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetArtistsResponse_ArtistsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Artist.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetArtistsResponse_ArtistsEntry>, I>>(
    object: I,
  ): GetArtistsResponse_ArtistsEntry {
    const message = createBaseGetArtistsResponse_ArtistsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Artist.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseListArtistsRequest(): ListArtistsRequest {
  return { pageKey: "", count: 0 };
}

export const ListArtistsRequest = {
  encode(message: ListArtistsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageKey !== "") {
      writer.uint32(10).string(message.pageKey);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArtistsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArtistsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageKey = reader.string();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArtistsRequest {
    return {
      pageKey: isSet(object.pageKey) ? String(object.pageKey) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: ListArtistsRequest): unknown {
    const obj: any = {};
    message.pageKey !== undefined && (obj.pageKey = message.pageKey);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListArtistsRequest>, I>>(object: I): ListArtistsRequest {
    const message = createBaseListArtistsRequest();
    message.pageKey = object.pageKey ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseListArtistsResponse(): ListArtistsResponse {
  return { artists: [], nextPageKey: [] };
}

export const ListArtistsResponse = {
  encode(message: ListArtistsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.artists) {
      Artist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nextPageKey) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArtistsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListArtistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.artists.push(Artist.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageKey.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArtistsResponse {
    return {
      artists: Array.isArray(object?.artists) ? object.artists.map((e: any) => Artist.fromJSON(e)) : [],
      nextPageKey: Array.isArray(object?.nextPageKey) ? object.nextPageKey.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ListArtistsResponse): unknown {
    const obj: any = {};
    if (message.artists) {
      obj.artists = message.artists.map((e) => e ? Artist.toJSON(e) : undefined);
    } else {
      obj.artists = [];
    }
    if (message.nextPageKey) {
      obj.nextPageKey = message.nextPageKey.map((e) => e);
    } else {
      obj.nextPageKey = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListArtistsResponse>, I>>(object: I): ListArtistsResponse {
    const message = createBaseListArtistsResponse();
    message.artists = object.artists?.map((e) => Artist.fromPartial(e)) || [];
    message.nextPageKey = object.nextPageKey?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteArtistRequest(): DeleteArtistRequest {
  return { id: "" };
}

export const DeleteArtistRequest = {
  encode(message: DeleteArtistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteArtistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteArtistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteArtistRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteArtistRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteArtistRequest>, I>>(object: I): DeleteArtistRequest {
    const message = createBaseDeleteArtistRequest();
    message.id = object.id ?? "";
    return message;
  },
};

/**
 * The main Artist server, serving as an entry into managing artist lifecycles
 * and retrieving them
 */
export type ArtistServiceService = typeof ArtistServiceService;
export const ArtistServiceService = {
  /** Create a new Artist */
  createArtist: {
    path: "/grpcdemo_protos.ArtistService/CreateArtist",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateArtistRequest) => Buffer.from(CreateArtistRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateArtistRequest.decode(value),
    responseSerialize: (value: Artist) => Buffer.from(Artist.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Artist.decode(value),
  },
  /** Batch gets multiple artists. */
  getArtists: {
    path: "/grpcdemo_protos.ArtistService/GetArtists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetArtistsRequest) => Buffer.from(GetArtistsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetArtistsRequest.decode(value),
    responseSerialize: (value: GetArtistsResponse) => Buffer.from(GetArtistsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetArtistsResponse.decode(value),
  },
  /** Updates specific fields of an Artist */
  updateArtist: {
    path: "/grpcdemo_protos.ArtistService/UpdateArtist",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateArtistRequest) => Buffer.from(UpdateArtistRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateArtistRequest.decode(value),
    responseSerialize: (value: Artist) => Buffer.from(Artist.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Artist.decode(value),
  },
  /** Deletes an artist from our system. */
  deleteArtist: {
    path: "/grpcdemo_protos.ArtistService/DeleteArtist",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteArtistRequest) => Buffer.from(DeleteArtistRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteArtistRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Finds and retrieves artists matching the particular criteria. */
  listArtists: {
    path: "/grpcdemo_protos.ArtistService/ListArtists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListArtistsRequest) => Buffer.from(ListArtistsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListArtistsRequest.decode(value),
    responseSerialize: (value: ListArtistsResponse) => Buffer.from(ListArtistsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListArtistsResponse.decode(value),
  },
} as const;

export interface ArtistServiceServer extends UntypedServiceImplementation {
  /** Create a new Artist */
  createArtist: handleUnaryCall<CreateArtistRequest, Artist>;
  /** Batch gets multiple artists. */
  getArtists: handleUnaryCall<GetArtistsRequest, GetArtistsResponse>;
  /** Updates specific fields of an Artist */
  updateArtist: handleUnaryCall<UpdateArtistRequest, Artist>;
  /** Deletes an artist from our system. */
  deleteArtist: handleUnaryCall<DeleteArtistRequest, Empty>;
  /** Finds and retrieves artists matching the particular criteria. */
  listArtists: handleUnaryCall<ListArtistsRequest, ListArtistsResponse>;
}

export interface ArtistServiceClient extends Client {
  /** Create a new Artist */
  createArtist(
    request: CreateArtistRequest,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  createArtist(
    request: CreateArtistRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  createArtist(
    request: CreateArtistRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  /** Batch gets multiple artists. */
  getArtists(
    request: GetArtistsRequest,
    callback: (error: ServiceError | null, response: GetArtistsResponse) => void,
  ): ClientUnaryCall;
  getArtists(
    request: GetArtistsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetArtistsResponse) => void,
  ): ClientUnaryCall;
  getArtists(
    request: GetArtistsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetArtistsResponse) => void,
  ): ClientUnaryCall;
  /** Updates specific fields of an Artist */
  updateArtist(
    request: UpdateArtistRequest,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  updateArtist(
    request: UpdateArtistRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  updateArtist(
    request: UpdateArtistRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Artist) => void,
  ): ClientUnaryCall;
  /** Deletes an artist from our system. */
  deleteArtist(
    request: DeleteArtistRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  deleteArtist(
    request: DeleteArtistRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  deleteArtist(
    request: DeleteArtistRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  /** Finds and retrieves artists matching the particular criteria. */
  listArtists(
    request: ListArtistsRequest,
    callback: (error: ServiceError | null, response: ListArtistsResponse) => void,
  ): ClientUnaryCall;
  listArtists(
    request: ListArtistsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListArtistsResponse) => void,
  ): ClientUnaryCall;
  listArtists(
    request: ListArtistsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListArtistsResponse) => void,
  ): ClientUnaryCall;
}

export const ArtistServiceClient = makeGenericClientConstructor(
  ArtistServiceService,
  "grpcdemo_protos.ArtistService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ArtistServiceClient;
  service: typeof ArtistServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
