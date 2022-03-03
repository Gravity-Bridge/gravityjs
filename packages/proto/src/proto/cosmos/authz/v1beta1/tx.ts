// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/authz/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos_proto/cosmos";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../google/protobuf/any";
import * as dependency_5 from "./../../base/abci/v1beta1/abci";
import * as dependency_6 from "./authz";
import * as pb_1 from "google-protobuf";
export namespace cosmos.authz.v1beta1 {
    export class MsgGrant extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            grant?: dependency_6.cosmos.authz.v1beta1.Grant;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("grant" in data && data.grant != undefined) {
                    this.grant = data.grant;
                }
            }
        }
        get granter() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get grantee() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get grant() {
            return pb_1.Message.getWrapperField(this, dependency_6.cosmos.authz.v1beta1.Grant, 3) as dependency_6.cosmos.authz.v1beta1.Grant;
        }
        set grant(value: dependency_6.cosmos.authz.v1beta1.Grant) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            grant?: ReturnType<typeof dependency_6.cosmos.authz.v1beta1.Grant.prototype.toObject>;
        }) {
            const message = new MsgGrant({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.grant != null) {
                message.grant = dependency_6.cosmos.authz.v1beta1.Grant.fromObject(data.grant);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                grant?: ReturnType<typeof dependency_6.cosmos.authz.v1beta1.Grant.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.grant != null) {
                data.grant = this.grant.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.granter === "string" && this.granter.length)
                writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length)
                writer.writeString(2, this.grantee);
            if (this.grant !== undefined)
                writer.writeMessage(3, this.grant, () => this.grant.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        message.grantee = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.grant, () => message.grant = dependency_6.cosmos.authz.v1beta1.Grant.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgGrant {
            return MsgGrant.deserialize(bytes);
        }
    }
    export class MsgExecResponse extends pb_1.Message {
        constructor(data?: any[] | {
            results?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("results" in data && data.results != undefined) {
                    this.results = data.results;
                }
            }
        }
        get results() {
            return pb_1.Message.getField(this, 1) as Uint8Array[];
        }
        set results(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            results?: Uint8Array[];
        }) {
            const message = new MsgExecResponse({});
            if (data.results != null) {
                message.results = data.results;
            }
            return message;
        }
        toObject() {
            const data: {
                results?: Uint8Array[];
            } = {};
            if (this.results != null) {
                data.results = this.results;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.results !== undefined)
                writer.writeRepeatedBytes(1, this.results);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgExecResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgExecResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgExecResponse {
            return MsgExecResponse.deserialize(bytes);
        }
    }
    export class MsgExec extends pb_1.Message {
        constructor(data?: any[] | {
            grantee?: string;
            msgs?: dependency_4.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("msgs" in data && data.msgs != undefined) {
                    this.msgs = data.msgs;
                }
            }
        }
        get grantee() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get msgs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.google.protobuf.Any, 2) as dependency_4.google.protobuf.Any[];
        }
        set msgs(value: dependency_4.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            grantee?: string;
            msgs?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>[];
        }) {
            const message = new MsgExec({});
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.msgs != null) {
                message.msgs = data.msgs.map(item => dependency_4.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                grantee?: string;
                msgs?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.msgs != null) {
                data.msgs = this.msgs.map((item: dependency_4.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.grantee === "string" && this.grantee.length)
                writer.writeString(1, this.grantee);
            if (this.msgs !== undefined)
                writer.writeRepeatedMessage(2, this.msgs, (item: dependency_4.google.protobuf.Any) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgExec {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgExec();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.grantee = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.msgs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.google.protobuf.Any.deserialize(reader), dependency_4.google.protobuf.Any));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgExec {
            return MsgExec.deserialize(bytes);
        }
    }
    export class MsgGrantResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgGrantResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgGrantResponse {
            return MsgGrantResponse.deserialize(bytes);
        }
    }
    export class MsgRevoke extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("msg_type_url" in data && data.msg_type_url != undefined) {
                    this.msg_type_url = data.msg_type_url;
                }
            }
        }
        get granter() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get grantee() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get msg_type_url() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set msg_type_url(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
        }) {
            const message = new MsgRevoke({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.msg_type_url != null) {
                message.msg_type_url = data.msg_type_url;
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                msg_type_url?: string;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.msg_type_url != null) {
                data.msg_type_url = this.msg_type_url;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.granter === "string" && this.granter.length)
                writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length)
                writer.writeString(2, this.grantee);
            if (typeof this.msg_type_url === "string" && this.msg_type_url.length)
                writer.writeString(3, this.msg_type_url);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevoke {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevoke();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        message.grantee = reader.readString();
                        break;
                    case 3:
                        message.msg_type_url = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRevoke {
            return MsgRevoke.deserialize(bytes);
        }
    }
    export class MsgRevokeResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgRevokeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRevokeResponse {
            return MsgRevokeResponse.deserialize(bytes);
        }
    }
}
