/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const EmployeePayrollRunsRetrieveRequestExpand: core.serialization.Schema<
    serializers.hris.EmployeePayrollRunsRetrieveRequestExpand.Raw,
    Merge.hris.EmployeePayrollRunsRetrieveRequestExpand
> = core.serialization.enum_(["employee", "employee,payroll_run", "payroll_run"]);

export declare namespace EmployeePayrollRunsRetrieveRequestExpand {
    type Raw = "employee" | "employee,payroll_run" | "payroll_run";
}
