/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface CustomObjectClassesCustomObjectsRemoteFieldClassesListRequest {
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
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
    /**
     * If provided, will only return remote field classes with this is_common_model_field value
     */
    isCommonModelField?: boolean;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
