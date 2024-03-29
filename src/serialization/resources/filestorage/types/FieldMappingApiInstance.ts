/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingApiInstance: core.serialization.ObjectSchema<
    serializers.filestorage.FieldMappingApiInstance.Raw,
    Merge.filestorage.FieldMappingApiInstance
> = core.serialization.object({
    id: core.serialization.string().optional(),
    isIntegrationWide: core.serialization.property("is_integration_wide", core.serialization.boolean().optional()),
    targetField: core.serialization.property(
        "target_field",
        core.serialization
            .lazyObject(async () => (await import("../../..")).filestorage.FieldMappingApiInstanceTargetField)
            .optional()
    ),
    remoteField: core.serialization.property(
        "remote_field",
        core.serialization
            .lazyObject(async () => (await import("../../..")).filestorage.FieldMappingApiInstanceRemoteField)
            .optional()
    ),
});

export declare namespace FieldMappingApiInstance {
    interface Raw {
        id?: string | null;
        is_integration_wide?: boolean | null;
        target_field?: serializers.filestorage.FieldMappingApiInstanceTargetField.Raw | null;
        remote_field?: serializers.filestorage.FieldMappingApiInstanceRemoteField.Raw | null;
    }
}
