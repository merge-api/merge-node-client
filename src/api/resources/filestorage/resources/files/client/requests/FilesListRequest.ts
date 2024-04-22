/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {}
 */
export interface FilesListRequest {
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
     * Specifying a drive id returns only the files in that drive. Specifying null returns only the files outside the top-level drive.
     */
    driveId?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.filestorage.FilesListRequestExpand;
    /**
     * Specifying a folder id returns only the files in that folder. Specifying null returns only the files in root directory.
     */
    folderId?: string;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, will only return files with these mime_types. Multiple values can be separated by commas.
     */
    mimeType?: string;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * If provided, will only return files with this name. This performs an exact match.
     */
    name?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
}
