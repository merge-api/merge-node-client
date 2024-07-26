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
export interface ContactRequest {
    /** The contact's name. */
    name?: string;
    /** The contact's email address. */
    emailAddress?: string;
    /** The contact's phone number. */
    phoneNumber?: string;
    /** The contact's details. */
    details?: string;
    /** The contact's account. */
    account?: Merge.ticketing.ContactRequestAccount;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}