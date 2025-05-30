/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AsyncPostTaskStatusEnum: core.serialization.Schema<
    serializers.accounting.AsyncPostTaskStatusEnum.Raw,
    Merge.accounting.AsyncPostTaskStatusEnum
> = core.serialization.enum_(["QUEUED", "IN_PROGRESS", "COMPLETED", "FAILURE"]);

export declare namespace AsyncPostTaskStatusEnum {
    export type Raw = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILURE";
}
