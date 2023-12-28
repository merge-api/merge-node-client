/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface IssuesListRequest {
    accountToken?: string;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If included, will only include issues whose most recent action occurred before this time
     */
    endDate?: string;
    endUserOrganizationName?: string;
    /**
     * If provided, will only return issues whose first incident time was after this datetime.
     */
    firstIncidentTimeAfter?: Date;
    /**
     * If provided, will only return issues whose first incident time was before this datetime.
     */
    firstIncidentTimeBefore?: Date;
    /**
     * If True, will include muted issues
     */
    includeMuted?: string;
    integrationName?: string;
    /**
     * If provided, will only return issues whose last incident time was after this datetime.
     */
    lastIncidentTimeAfter?: Date;
    /**
     * If provided, will only return issues whose last incident time was before this datetime.
     */
    lastIncidentTimeBefore?: Date;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * If included, will only include issues whose most recent action occurred after this time
     */
    startDate?: string;
    /**
     * Status of the issue. Options: ('ONGOING', 'RESOLVED')
     *
     * - `ONGOING` - ONGOING
     * - `RESOLVED` - RESOLVED
     */
    status?: Merge.hris.IssuesListRequestStatus;
}
