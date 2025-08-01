/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface FilesDownloadRequestMetaListRequest {
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: string;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: string;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/).
     */
    includeDeletedData?: boolean;
    /**
     * A comma-separated list of preferred MIME types in order of priority. If supported by the third-party provider, the file(s) will be returned in the first supported MIME type from the list. The default MIME type is PDF. To see supported MIME types by file type, refer to our <a href='https://help.merge.dev/en/articles/8615316-file-export-and-download-specification' target='_blank'>export format help center article</a>.
     */
    mimeTypes?: string;
    /**
     * If provided, will only return objects modified after this datetime.
     */
    modifiedAfter?: string;
    /**
     * If provided, will only return objects modified before this datetime.
     */
    modifiedBefore?: string;
    /**
     * Overrides the default ordering for this endpoint. Possible values include: created_at, -created_at, modified_at, -modified_at.
     */
    orderBy?: Merge.filestorage.FilesDownloadRequestMetaListRequestOrderBy;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
