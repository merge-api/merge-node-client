/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CrmAssociationTypeResponse: core.serialization.ObjectSchema<
    serializers.crm.CrmAssociationTypeResponse.Raw,
    Merge.crm.CrmAssociationTypeResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).crm.AssociationType),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).crm.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).crm.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.DebugModeLog))
        .optional(),
});

export declare namespace CrmAssociationTypeResponse {
    interface Raw {
        model: serializers.crm.AssociationType.Raw;
        warnings: serializers.crm.WarningValidationProblem.Raw[];
        errors: serializers.crm.ErrorValidationProblem.Raw[];
        logs?: serializers.crm.DebugModeLog.Raw[] | null;
    }
}
