/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedBalanceSheetList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedBalanceSheetList.Raw,
    Merge.accounting.PaginatedBalanceSheetList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.BalanceSheet))
        .optional(),
});

export declare namespace PaginatedBalanceSheetList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.accounting.BalanceSheet.Raw[] | null;
    }
}
