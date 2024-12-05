/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ModelPermissionDeserializerRequest: core.serialization.ObjectSchema<
    serializers.crm.ModelPermissionDeserializerRequest.Raw,
    Merge.crm.ModelPermissionDeserializerRequest
> = core.serialization.object({
    isEnabled: core.serialization.property("is_enabled", core.serialization.boolean().optional()),
});

export declare namespace ModelPermissionDeserializerRequest {
    interface Raw {
        is_enabled?: boolean | null;
    }
}
