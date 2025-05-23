/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Scorecard } from "./Scorecard";

export const PaginatedScorecardList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedScorecardList.Raw,
    Merge.ats.PaginatedScorecardList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Scorecard).optional(),
});

export declare namespace PaginatedScorecardList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Scorecard.Raw[] | null;
    }
}
