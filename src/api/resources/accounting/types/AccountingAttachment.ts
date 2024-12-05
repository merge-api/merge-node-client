/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

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
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The attachment's name. */
    fileName?: string;
    /** The attachment's url. */
    fileUrl?: string;
    /** The company the accounting attachment belongs to. */
    company?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
