/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Job } from "./Job";

export const PaginatedJobList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedJobList.Raw,
    Merge.ats.PaginatedJobList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Job).optional(),
});

export declare namespace PaginatedJobList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Job.Raw[] | null;
    }
}
