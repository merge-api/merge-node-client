/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const PaginatedEmployeeList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedEmployeeList.Raw,
    Merge.accounting.PaginatedEmployeeList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Employee).optional(),
});

export declare namespace PaginatedEmployeeList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Employee.Raw[] | null;
    }
}
