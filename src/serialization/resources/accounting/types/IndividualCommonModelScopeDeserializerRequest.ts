/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ModelPermissionDeserializerRequest } from "./ModelPermissionDeserializerRequest";
import { FieldPermissionDeserializerRequest } from "./FieldPermissionDeserializerRequest";

export const IndividualCommonModelScopeDeserializerRequest: core.serialization.ObjectSchema<
    serializers.accounting.IndividualCommonModelScopeDeserializerRequest.Raw,
    Merge.accounting.IndividualCommonModelScopeDeserializerRequest
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    modelPermissions: core.serialization.property(
        "model_permissions",
        core.serialization.record(core.serialization.string(), ModelPermissionDeserializerRequest).optional(),
    ),
    fieldPermissions: core.serialization.property("field_permissions", FieldPermissionDeserializerRequest.optional()),
});

export declare namespace IndividualCommonModelScopeDeserializerRequest {
    export interface Raw {
        model_name: string;
        model_permissions?: Record<string, ModelPermissionDeserializerRequest.Raw> | null;
        field_permissions?: FieldPermissionDeserializerRequest.Raw | null;
    }
}
