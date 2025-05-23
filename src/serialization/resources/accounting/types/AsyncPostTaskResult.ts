/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AsyncPostTaskResult: core.serialization.ObjectSchema<
    serializers.accounting.AsyncPostTaskResult.Raw,
    Merge.accounting.AsyncPostTaskResult
> = core.serialization.object({
    statusCode: core.serialization.property("status_code", core.serialization.number().optional()),
    response: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace AsyncPostTaskResult {
    export interface Raw {
        status_code?: number | null;
        response?: Record<string, unknown> | null;
    }
}
