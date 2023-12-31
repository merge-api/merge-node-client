/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const WarningValidationProblem: core.serialization.ObjectSchema<
    serializers.accounting.WarningValidationProblem.Raw,
    Merge.accounting.WarningValidationProblem
> = core.serialization.object({
    source: core.serialization
        .lazyObject(async () => (await import("../../..")).accounting.ValidationProblemSource)
        .optional(),
    title: core.serialization.string(),
    detail: core.serialization.string(),
    problemType: core.serialization.property("problem_type", core.serialization.string()),
});

export declare namespace WarningValidationProblem {
    interface Raw {
        source?: serializers.accounting.ValidationProblemSource.Raw | null;
        title: string;
        detail: string;
        problem_type: string;
    }
}
