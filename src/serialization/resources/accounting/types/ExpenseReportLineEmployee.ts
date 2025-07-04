/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const ExpenseReportLineEmployee: core.serialization.Schema<
    serializers.accounting.ExpenseReportLineEmployee.Raw,
    Merge.accounting.ExpenseReportLineEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace ExpenseReportLineEmployee {
    export type Raw = string | Employee.Raw;
}
