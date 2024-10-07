/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The LinkedAccount Object
 *
 * ### Description
 *
 * The `LinkedAccount` object is used to represent an end user's link with a specific integration.
 *
 * ### Usage Example
 *
 * View a list of your organization's `LinkedAccount` objects.
 */
export interface AccountDetailsAndActions {
    id: string;
    category?: Merge.filestorage.CategoryEnum;
    status: Merge.filestorage.AccountDetailsAndActionsStatusEnum;
    statusDetail?: string;
    endUserOriginId?: string;
    endUserOrganizationName: string;
    endUserEmailAddress: string;
    /** The tenant or domain the customer has provided access to. */
    subdomain?: string;
    webhookListenerUrl: string;
    /** Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets. */
    isDuplicate?: boolean;
    integration?: Merge.filestorage.AccountDetailsAndActionsIntegration;
    accountType: string;
    completedAt: Date;
}
