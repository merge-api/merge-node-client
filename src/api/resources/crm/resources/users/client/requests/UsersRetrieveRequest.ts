/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface UsersRetrieveRequest {
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
    /**
     * Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null).
     */
    includeShellData?: boolean;
}
