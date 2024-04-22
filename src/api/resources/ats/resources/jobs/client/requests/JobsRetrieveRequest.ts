/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {}
 */
export interface JobsRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.ats.JobsRetrieveRequestExpand;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "status";
    /**
     * A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter)
     */
    showEnumOrigins?: "status";
}
