/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The ReportItem Object
 *
 * ### Description
 *
 * The `ReportItem` object is used to represent a report item for a Balance Sheet, Cash Flow Statement or Profit and Loss Report.
 *
 * ### Usage Example
 *
 * Fetch from the `GET BalanceSheet` endpoint and view the balance sheet's report items.
 */
export interface ReportItem {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The report item's name. */
    name?: string;
    /** The report item's value. */
    value?: number;
    subItems?: Record<string, unknown>[];
    /** The company the report item belongs to. */
    company?: string;
}
