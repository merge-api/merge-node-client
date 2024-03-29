/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: Merge.crm.OpportunitiesRetrieveRequestExpand.Account,
 *         remoteFields: "status",
 *         showEnumOrigins: "status"
 *     }
 */
export interface OpportunitiesRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.crm.OpportunitiesRetrieveRequestExpand;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "status";
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "status";
}
