// @generated by protoc-gen-es v1.0.0
// @generated from file grpcdemo/v1/models.proto (package grpcdemo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// option go_package = "github.com/panyam/grpcdemo/protos";

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message grpcdemo.v1.Location
 */
export declare class Location extends Message<Location> {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  constructor(data?: PartialMessage<Location>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "grpcdemo.v1.Location";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Location;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Location;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Location;

  static equals(a: Location | PlainMessage<Location> | undefined, b: Location | PlainMessage<Location> | undefined): boolean;
}

/**
 * @generated from message grpcdemo.v1.Artist
 */
export declare class Artist extends Message<Artist> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp date_of_birth = 5;
   */
  dateOfBirth?: Timestamp;

  constructor(data?: PartialMessage<Artist>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "grpcdemo.v1.Artist";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Artist;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Artist;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Artist;

  static equals(a: Artist | PlainMessage<Artist> | undefined, b: Artist | PlainMessage<Artist> | undefined): boolean;
}

/**
 * @generated from message grpcdemo.v1.Album
 */
export declare class Album extends Message<Album> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp released_on = 5;
   */
  releasedOn?: Timestamp;

  constructor(data?: PartialMessage<Album>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "grpcdemo.v1.Album";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Album;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Album;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Album;

  static equals(a: Album | PlainMessage<Album> | undefined, b: Album | PlainMessage<Album> | undefined): boolean;
}

/**
 * @generated from message grpcdemo.v1.Event
 */
export declare class Event extends Message<Event> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: grpcdemo.v1.Location location = 5;
   */
  location?: Location;

  constructor(data?: PartialMessage<Event>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "grpcdemo.v1.Event";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}

/**
 * @generated from message grpcdemo.v1.Chat
 */
export declare class Chat extends Message<Chat> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: string creator = 4;
   */
  creator: string;

  constructor(data?: PartialMessage<Chat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "grpcdemo.v1.Chat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chat;

  static equals(a: Chat | PlainMessage<Chat> | undefined, b: Chat | PlainMessage<Chat> | undefined): boolean;
}
