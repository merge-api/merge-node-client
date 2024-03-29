/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingInstanceResponse: core.serialization.ObjectSchema<
    serializers.ats.FieldMappingInstanceResponse.Raw,
    Merge.ats.FieldMappingInstanceResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).ats.FieldMappingApiInstance),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ats.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ats.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.DebugModeLog))
        .optional(),
});

export declare namespace FieldMappingInstanceResponse {
    interface Raw {
        model: serializers.ats.FieldMappingApiInstance.Raw;
        warnings: serializers.ats.WarningValidationProblem.Raw[];
        errors: serializers.ats.ErrorValidationProblem.Raw[];
        logs?: serializers.ats.DebugModeLog.Raw[] | null;
    }
}
