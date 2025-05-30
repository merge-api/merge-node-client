/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldClass } from "./RemoteFieldClass";

export const RemoteFieldRemoteFieldClass: core.serialization.Schema<
    serializers.accounting.RemoteFieldRemoteFieldClass.Raw,
    Merge.accounting.RemoteFieldRemoteFieldClass
> = core.serialization.undiscriminatedUnion([core.serialization.string(), RemoteFieldClass]);

export declare namespace RemoteFieldRemoteFieldClass {
    export type Raw = string | RemoteFieldClass.Raw;
}
