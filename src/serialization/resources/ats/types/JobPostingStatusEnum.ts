/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const JobPostingStatusEnum: core.serialization.Schema<
    serializers.ats.JobPostingStatusEnum.Raw,
    Merge.ats.JobPostingStatusEnum
> = core.serialization.enum_(["PUBLISHED", "CLOSED", "DRAFT", "INTERNAL", "PENDING"]);

export declare namespace JobPostingStatusEnum {
    export type Raw = "PUBLISHED" | "CLOSED" | "DRAFT" | "INTERNAL" | "PENDING";
}
