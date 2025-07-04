/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ExpenseReportsRetrieveRequestExpand: core.serialization.Schema<
    serializers.accounting.ExpenseReportsRetrieveRequestExpand.Raw,
    Merge.accounting.ExpenseReportsRetrieveRequestExpand
> = core.serialization.enum_([
    "accounting_period",
    "accounting_period,company",
    "company",
    "employee",
    "employee,accounting_period",
    "employee,accounting_period,company",
    "employee,company",
    "lines",
    "lines,accounting_period",
    "lines,accounting_period,company",
    "lines,company",
    "lines,employee",
    "lines,employee,accounting_period",
    "lines,employee,accounting_period,company",
    "lines,employee,company",
]);

export declare namespace ExpenseReportsRetrieveRequestExpand {
    export type Raw =
        | "accounting_period"
        | "accounting_period,company"
        | "company"
        | "employee"
        | "employee,accounting_period"
        | "employee,accounting_period,company"
        | "employee,company"
        | "lines"
        | "lines,accounting_period"
        | "lines,accounting_period,company"
        | "lines,company"
        | "lines,employee"
        | "lines,employee,accounting_period"
        | "lines,employee,accounting_period,company"
        | "lines,employee,company";
}
