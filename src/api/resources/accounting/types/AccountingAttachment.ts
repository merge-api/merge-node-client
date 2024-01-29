/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Accounting Attachment Object
 *
 * ### Description
 *
 * The `AccountingAttachment` object is used to represent a company's attachments.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST AccountingAttachments` endpoint and view a company's attachments.
 */
export interface AccountingAttachment {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The attachment's name. */
    fileName?: string;
    /** The attachment's url. */
    fileUrl?: string;
    /** The company the accounting attachment belongs to. */
    company?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
