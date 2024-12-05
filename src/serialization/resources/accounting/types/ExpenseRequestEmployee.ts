/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const ExpenseRequestEmployee: core.serialization.Schema<
    serializers.accounting.ExpenseRequestEmployee.Raw,
    Merge.accounting.ExpenseRequestEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace ExpenseRequestEmployee {
    type Raw = string | Employee.Raw;
}