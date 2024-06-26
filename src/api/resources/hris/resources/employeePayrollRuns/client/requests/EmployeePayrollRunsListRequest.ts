/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {}
 */
export interface EmployeePayrollRunsListRequest {
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: Date;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: Date;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return employee payroll runs for this employee.
     */
    employeeId?: string;
    /**
     * If provided, will only return employee payroll runs ended after this datetime.
     */
    endedAfter?: Date;
    /**
     * If provided, will only return employee payroll runs ended before this datetime.
     */
    endedBefore?: Date;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.hris.EmployeePayrollRunsListRequestExpand;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * If provided, will only return employee payroll runs for this employee.
     */
    payrollRunId?: string;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * If provided, will only return employee payroll runs started after this datetime.
     */
    startedAfter?: Date;
    /**
     * If provided, will only return employee payroll runs started before this datetime.
     */
    startedBefore?: Date;
}
