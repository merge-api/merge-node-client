/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: Merge.crm.OpportunitiesListRequestExpand.Account,
 *         remoteFields: "status",
 *         showEnumOrigins: "status",
 *         status: Merge.crm.OpportunitiesListRequestStatus.Lost
 *     }
 */
export interface OpportunitiesListRequest {
    /**
     * If provided, will only return opportunities with this account.
     */
    accountId?: string;
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
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.crm.OpportunitiesListRequestExpand;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * If provided, will only return opportunities with this owner.
     */
    ownerId?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "status";
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "status";
    /**
     * If provided, will only return opportunities with this stage.
     */
    stageId?: string;
    /**
     * If provided, will only return opportunities with this status. Options: ('OPEN', 'WON', 'LOST')
     *
     * - `OPEN` - OPEN
     * - `WON` - WON
     * - `LOST` - LOST
     */
    status?: Merge.crm.OpportunitiesListRequestStatus;
}
