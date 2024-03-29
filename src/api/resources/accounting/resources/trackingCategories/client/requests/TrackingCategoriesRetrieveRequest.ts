/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         expand: "company",
 *         remoteFields: "status",
 *         showEnumOrigins: "status"
 *     }
 */
export interface TrackingCategoriesRetrieveRequest {
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: "company";
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "status";
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "status";
}
