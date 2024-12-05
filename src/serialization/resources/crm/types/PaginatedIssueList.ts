/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Issue } from "./Issue";

export const PaginatedIssueList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedIssueList.Raw,
    Merge.crm.PaginatedIssueList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Issue).optional(),
});

export declare namespace PaginatedIssueList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Issue.Raw[] | null;
    }
}
