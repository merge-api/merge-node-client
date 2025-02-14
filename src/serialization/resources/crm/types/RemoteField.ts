/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldRemoteFieldClass } from "./RemoteFieldRemoteFieldClass";

export const RemoteField: core.serialization.ObjectSchema<serializers.crm.RemoteField.Raw, Merge.crm.RemoteField> =
    core.serialization.object({
        remoteFieldClass: core.serialization.property("remote_field_class", RemoteFieldRemoteFieldClass),
        value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace RemoteField {
    interface Raw {
        remote_field_class: RemoteFieldRemoteFieldClass.Raw;
        value?: Record<string, unknown> | null;
    }
}
