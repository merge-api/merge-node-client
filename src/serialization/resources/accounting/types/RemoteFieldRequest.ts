/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldRequestRemoteFieldClass } from "./RemoteFieldRequestRemoteFieldClass";

export const RemoteFieldRequest: core.serialization.ObjectSchema<
    serializers.accounting.RemoteFieldRequest.Raw,
    Merge.accounting.RemoteFieldRequest
> = core.serialization.object({
    remoteFieldClass: core.serialization.property("remote_field_class", RemoteFieldRequestRemoteFieldClass),
    value: core.serialization.unknown().optional(),
});

export declare namespace RemoteFieldRequest {
    interface Raw {
        remote_field_class: RemoteFieldRequestRemoteFieldClass.Raw;
        value?: unknown | null;
    }
}
