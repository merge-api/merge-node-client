/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const VendorCreditResponse: core.serialization.ObjectSchema<
    serializers.accounting.VendorCreditResponse.Raw,
    Merge.accounting.VendorCreditResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(() => serializers.accounting.VendorCredit),
    warnings: core.serialization.list(WarningValidationProblem),
    errors: core.serialization.list(ErrorValidationProblem),
    logs: core.serialization.list(DebugModeLog).optional(),
});

export declare namespace VendorCreditResponse {
    interface Raw {
        model: serializers.accounting.VendorCredit.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}