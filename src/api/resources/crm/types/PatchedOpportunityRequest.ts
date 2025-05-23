/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Opportunity Object
 * ### Description
 * The `Opportunity` object is used to represent a deal opportunity in a CRM system.
 * ### Usage Example
 * TODO
 */
export interface PatchedOpportunityRequest {
    /** The opportunity's name. */
    name?: string;
    /** The opportunity's description. */
    description?: string;
    /** The opportunity's amount. */
    amount?: number;
    /** The opportunity's owner. */
    owner?: string;
    /** The account of the opportunity. */
    account?: string;
    /** The stage of the opportunity. */
    stage?: string;
    /**
     * The opportunity's status.
     *
     * * `OPEN` - OPEN
     * * `WON` - WON
     * * `LOST` - LOST
     */
    status?: Merge.crm.PatchedOpportunityRequestStatus;
    /** When the opportunity's last activity occurred. */
    lastActivityAt?: Date;
    /** When the opportunity was closed. */
    closeDate?: Date;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.crm.RemoteFieldRequest[];
}
