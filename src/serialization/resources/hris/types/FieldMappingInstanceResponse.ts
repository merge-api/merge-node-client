/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingInstanceResponse: core.serialization.ObjectSchema<
    serializers.hris.FieldMappingInstanceResponse.Raw,
    Merge.hris.FieldMappingInstanceResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).hris.FieldMappingApiInstance),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).hris.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).hris.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.DebugModeLog))
        .optional(),
});

export declare namespace FieldMappingInstanceResponse {
    interface Raw {
        model: serializers.hris.FieldMappingApiInstance.Raw;
        warnings: serializers.hris.WarningValidationProblem.Raw[];
        errors: serializers.hris.ErrorValidationProblem.Raw[];
        logs?: serializers.hris.DebugModeLog.Raw[] | null;
    }
}
