/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The EmployeePayrollRun Object
 *
 * ### Description
 *
 * The `EmployeePayrollRun` object is used to represent an employee's pay statement for a specific payroll run.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST EmployeePayrollRun` endpoint and filter by `ID` to show all employee payroll runs.
 */
export interface EmployeePayrollRun {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The employee whose payroll is being run. */
    employee?: Merge.hris.EmployeePayrollRunEmployee;
    /** The payroll being run. */
    payrollRun?: Merge.hris.EmployeePayrollRunPayrollRun;
    /** The total earnings throughout a given period for an employee before any deductions are made. */
    grossPay?: number;
    /** The take-home pay throughout a given period for an employee after deductions are made. */
    netPay?: number;
    /** The day and time the payroll run started. */
    startDate?: Date;
    /** The day and time the payroll run ended. */
    endDate?: Date;
    /** The day and time the payroll run was checked. */
    checkDate?: Date;
    earnings?: Merge.hris.Earning[];
    deductions?: Merge.hris.Deduction[];
    taxes?: Merge.hris.Tax[];
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
