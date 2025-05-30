/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Timesheet Entry Object
 * ### Description
 * The `Timesheet Entry` object is used to track coverage for hours worked by an 'Employee'.
 *
 *
 * ### Usage Example
 * GET and POST Timesheet Entries
 */
export interface TimesheetEntryRequest {
    /** The employee the timesheet entry is for. */
    employee?: Merge.hris.TimesheetEntryRequestEmployee;
    /** The number of hours logged by the employee. */
    hoursWorked?: number;
    /** The time at which the employee started work. */
    startTime?: Date;
    /** The time at which the employee ended work. */
    endTime?: Date;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
