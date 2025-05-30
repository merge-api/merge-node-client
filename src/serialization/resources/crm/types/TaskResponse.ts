/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Task } from "./Task";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const TaskResponse: core.serialization.ObjectSchema<serializers.crm.TaskResponse.Raw, Merge.crm.TaskResponse> =
    core.serialization.object({
        model: Task,
        warnings: core.serialization.list(WarningValidationProblem),
        errors: core.serialization.list(ErrorValidationProblem),
        logs: core.serialization.list(DebugModeLog).optional(),
    });

export declare namespace TaskResponse {
    export interface Raw {
        model: Task.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}
