/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedAccount } from "./BankFeedAccount";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const BankFeedAccountResponse: core.serialization.ObjectSchema<
    serializers.accounting.BankFeedAccountResponse.Raw,
    Merge.accounting.BankFeedAccountResponse
> = core.serialization.object({
    model: BankFeedAccount,
    warnings: core.serialization.list(WarningValidationProblem),
    errors: core.serialization.list(ErrorValidationProblem),
    logs: core.serialization.list(DebugModeLog).optional(),
});

export declare namespace BankFeedAccountResponse {
    interface Raw {
        model: BankFeedAccount.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}