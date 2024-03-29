/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         remoteFields: "location_type",
 *         showEnumOrigins: "location_type"
 *     }
 */
export interface LocationsRetrieveRequest {
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "location_type";
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "location_type";
}
