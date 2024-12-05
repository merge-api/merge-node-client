/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TimeOffBalance } from "./TimeOffBalance";

export const PaginatedTimeOffBalanceList: core.serialization.ObjectSchema<
    serializers.hris.PaginatedTimeOffBalanceList.Raw,
    Merge.hris.PaginatedTimeOffBalanceList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(TimeOffBalance).optional(),
});

export declare namespace PaginatedTimeOffBalanceList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: TimeOffBalance.Raw[] | null;
    }
}
