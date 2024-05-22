/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Opportunity Object
 *
 * ### Description
 *
 * The `Opportunity` object is used to represent a deal opportunity in a CRM system.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Opportunity {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The opportunity's name. */
    name?: string;
    /** The opportunity's description. */
    description?: string;
    /** The opportunity's amount. */
    amount?: number;
    /** The opportunity's owner. */
    owner?: Merge.crm.OpportunityOwner;
    /** The account of the opportunity. */
    account?: Merge.crm.OpportunityAccount;
    /** The stage of the opportunity. */
    stage?: Merge.crm.OpportunityStage;
    /**
     * The opportunity's status.
     *
     * - `OPEN` - OPEN
     * - `WON` - WON
     * - `LOST` - LOST
     */
    status?: Merge.crm.OpportunityStatus;
    /** When the opportunity's last activity occurred. */
    lastActivityAt?: Date;
    /** When the opportunity was closed. */
    closeDate?: Date;
    /** When the third party's opportunity was created. */
    remoteCreatedAt?: Date;
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
