/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldRemoteFieldClass: core.serialization.Schema<
    serializers.ticketing.RemoteFieldRemoteFieldClass.Raw,
    Merge.ticketing.RemoteFieldRemoteFieldClass
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.RemoteFieldClass),
]);

export declare namespace RemoteFieldRemoteFieldClass {
    type Raw = string | serializers.ticketing.RemoteFieldClass.Raw;
}