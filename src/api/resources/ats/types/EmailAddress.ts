/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The EmailAddress Object
 *
 * ### Description
 *
 * The `EmailAddress` object is used to represent a candidate's email address.
 *
 * ### Usage Example
 *
 * Fetch from the `GET Candidate` endpoint and view their email addresses.
 */
export interface EmailAddress {
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The email address. */
    value?: string;
    /**
     * The type of email address.
     *
     * - `PERSONAL` - PERSONAL
     * - `WORK` - WORK
     * - `OTHER` - OTHER
     */
    emailAddressType?: Merge.ats.EmailAddressEmailAddressType;
}
