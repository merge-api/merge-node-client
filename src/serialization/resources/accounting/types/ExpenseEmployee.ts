/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const ExpenseEmployee: core.serialization.Schema<
    serializers.accounting.ExpenseEmployee.Raw,
    Merge.accounting.ExpenseEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace ExpenseEmployee {
    type Raw = string | Employee.Raw;
}