/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The AccountingPeriod Object
 * ### Description
 * The `AccountingPeriod` object is used to define a period of time in which events occurred.
 *
 * ### Usage Example
 * Common models like `Invoice` and `Transaction` will have `AccountingPeriod` objects which will denote when they occurred.
 */
export interface AccountingPeriod {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** Name of the accounting period. */
    name?: string;
    status?: Merge.accounting.AccountingPeriodStatus;
    /** Beginning date of the period */
    startDate?: Date;
    /** End date of the period */
    endDate?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
