/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Engagement Object
 *
 * ### Description
 *
 * The `Engagement` object is used to represent an interaction noted in a CRM system.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface PatchedEngagementRequest {
    /** The engagement's owner. */
    owner?: string;
    /** The engagement's content. */
    content?: string;
    /** The engagement's subject. */
    subject?: string;
    /**
     * The engagement's direction.
     *
     * - `INBOUND` - INBOUND
     * - `OUTBOUND` - OUTBOUND
     */
    direction?: Merge.crm.PatchedEngagementRequestDirection;
    /** The engagement type of the engagement. */
    engagementType?: string;
    /** The time at which the engagement started. */
    startTime?: Date;
    /** The time at which the engagement ended. */
    endTime?: Date;
    /** The account of the engagement. */
    account?: string;
    contacts?: (string | undefined)[];
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.crm.RemoteFieldRequest[];
}
