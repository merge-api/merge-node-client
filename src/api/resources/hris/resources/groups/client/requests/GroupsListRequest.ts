/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         remoteFields: "type",
 *         showEnumOrigins: "type"
 *     }
 */
export interface GroupsListRequest {
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
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "type";
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "type";
    /**
     * If provided, will only return groups of these types. Multiple values can be separated by commas.
     */
    types?: string;
}
