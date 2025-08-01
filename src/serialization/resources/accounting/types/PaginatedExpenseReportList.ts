/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExpenseReport } from "./ExpenseReport";

export const PaginatedExpenseReportList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedExpenseReportList.Raw,
    Merge.accounting.PaginatedExpenseReportList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(ExpenseReport).optional(),
});

export declare namespace PaginatedExpenseReportList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: ExpenseReport.Raw[] | null;
    }
}
