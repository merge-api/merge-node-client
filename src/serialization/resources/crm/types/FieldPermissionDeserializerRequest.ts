/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const FieldPermissionDeserializerRequest: core.serialization.ObjectSchema<
    serializers.crm.FieldPermissionDeserializerRequest.Raw,
    Merge.crm.FieldPermissionDeserializerRequest
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
