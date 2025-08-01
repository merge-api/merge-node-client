/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface AccountDetails {
    id?: string;
    integration?: string;
    integrationSlug?: string;
    category?: Merge.ats.AccountDetailsCategory;
    endUserOriginId?: string;
    endUserOrganizationName?: string;
    endUserEmailAddress?: string;
    status?: string;
    webhookListenerUrl?: string;
    /** Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets. */
    isDuplicate?: boolean;
    accountType?: string;
    /** The time at which account completes the linking flow. */
    completedAt?: Date;
}
