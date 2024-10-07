/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Contact Object
 *
 * ### Description
 *
 * The `Contact` object is used to represent the customer, lead, or external user that a ticket is associated with.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Contact {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The contact's name. */
    name?: string;
    /** The contact's email address. */
    emailAddress?: string;
    /** The contact's phone number. */
    phoneNumber?: string;
    /** The contact's details. */
    details?: string;
    /** The contact's account. */
    account?: Merge.ticketing.ContactAccount;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
