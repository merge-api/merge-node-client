/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldPermissionDeserializerRequest: core.serialization.ObjectSchema<
    serializers.hris.FieldPermissionDeserializerRequest.Raw,
    Merge.hris.FieldPermissionDeserializerRequest
> = core.serialization.object({
    enabled: core.serialization.list(core.serialization.unknown()).optional(),
    disabled: core.serialization.list(core.serialization.unknown()).optional(),
});

export declare namespace FieldPermissionDeserializerRequest {
    interface Raw {
        enabled?: unknown[] | null;
        disabled?: unknown[] | null;
    }
}
