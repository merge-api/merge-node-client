/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface NotesListRequest {
    /**
     * If provided, will only return notes with this account.
     */
    accountId?: string;
    /**
     * If provided, will only return notes with this contact.
     */
    contactId?: string;
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
    expand?: Merge.crm.NotesListRequestExpand;
    /**
     * Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/).
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
     * Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null).
     */
    includeShellData?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * If provided, will only return notes with this opportunity.
     */
    opportunityId?: string;
    /**
     * If provided, will only return notes with this owner.
     */
    ownerId?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
}
