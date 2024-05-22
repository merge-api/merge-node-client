/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The RejectReason Object
 *
 * ### Description
 *
 * The `RejectReason` object is used to represent a reason for rejecting an application. These can typically be configured within an ATS system.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST RejectReasons` endpoint and filter by `ID` to show all reasons.
 */
export interface RejectReason {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The rejection reason’s name. */
    name?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
