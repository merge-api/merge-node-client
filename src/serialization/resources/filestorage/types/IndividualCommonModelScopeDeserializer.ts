/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ModelPermissionDeserializer } from "./ModelPermissionDeserializer";
import { FieldPermissionDeserializer } from "./FieldPermissionDeserializer";

export const IndividualCommonModelScopeDeserializer: core.serialization.ObjectSchema<
    serializers.filestorage.IndividualCommonModelScopeDeserializer.Raw,
    Merge.filestorage.IndividualCommonModelScopeDeserializer
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    modelPermissions: core.serialization.property(
        "model_permissions",
        core.serialization.record(core.serialization.string(), ModelPermissionDeserializer).optional()
    ),
    fieldPermissions: core.serialization.property("field_permissions", FieldPermissionDeserializer.optional()),
});

export declare namespace IndividualCommonModelScopeDeserializer {
    interface Raw {
        model_name: string;
        model_permissions?: Record<string, ModelPermissionDeserializer.Raw> | null;
        field_permissions?: FieldPermissionDeserializer.Raw | null;
    }
}
