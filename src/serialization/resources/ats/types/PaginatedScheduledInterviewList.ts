/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ScheduledInterview } from "./ScheduledInterview";

export const PaginatedScheduledInterviewList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedScheduledInterviewList.Raw,
    Merge.ats.PaginatedScheduledInterviewList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(ScheduledInterview).optional(),
});

export declare namespace PaginatedScheduledInterviewList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: ScheduledInterview.Raw[] | null;
    }
}
