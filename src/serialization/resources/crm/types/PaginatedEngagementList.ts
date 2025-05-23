/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Engagement } from "./Engagement";

export const PaginatedEngagementList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedEngagementList.Raw,
    Merge.crm.PaginatedEngagementList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Engagement).optional(),
});

export declare namespace PaginatedEngagementList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Engagement.Raw[] | null;
    }
}
