/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const ExpenseLineEmployee: core.serialization.Schema<
    serializers.accounting.ExpenseLineEmployee.Raw,
    Merge.accounting.ExpenseLineEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace ExpenseLineEmployee {
    type Raw = string | Employee.Raw;
}