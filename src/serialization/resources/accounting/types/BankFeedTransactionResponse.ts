/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedTransaction } from "./BankFeedTransaction";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const BankFeedTransactionResponse: core.serialization.ObjectSchema<
    serializers.accounting.BankFeedTransactionResponse.Raw,
    Merge.accounting.BankFeedTransactionResponse
> = core.serialization.object({
    model: BankFeedTransaction,
    warnings: core.serialization.list(WarningValidationProblem),
    errors: core.serialization.list(ErrorValidationProblem),
    logs: core.serialization.list(DebugModeLog).optional(),
});

export declare namespace BankFeedTransactionResponse {
    export interface Raw {
        model: BankFeedTransaction.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}
