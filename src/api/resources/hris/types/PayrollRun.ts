/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The PayrollRun Object
 *
 * ### Description
 *
 * The `PayrollRun` object is used to represent a group of pay statements for a specific pay schedule.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST PayrollRuns` endpoint and filter by `ID` to show all payroll runs.
 */
export interface PayrollRun {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /**
     * The state of the payroll run
     *
     * - `PAID` - PAID
     * - `DRAFT` - DRAFT
     * - `APPROVED` - APPROVED
     * - `FAILED` - FAILED
     * - `CLOSED` - CLOSED
     */
    runState?: Merge.hris.PayrollRunRunState;
    /**
     * The type of the payroll run
     *
     * - `REGULAR` - REGULAR
     * - `OFF_CYCLE` - OFF_CYCLE
     * - `CORRECTION` - CORRECTION
     * - `TERMINATION` - TERMINATION
     * - `SIGN_ON_BONUS` - SIGN_ON_BONUS
     */
    runType?: Merge.hris.PayrollRunRunType;
    /** The day and time the payroll run started. */
    startDate?: Date;
    /** The day and time the payroll run ended. */
    endDate?: Date;
    /** The day and time the payroll run was checked. */
    checkDate?: Date;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
