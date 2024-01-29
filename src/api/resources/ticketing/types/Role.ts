/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Role Object
 *
 * ### Description
 *
 * The `Role` object is used to represent the set of actions & access that a user with this role is allowed to perform.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Role {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The name of the Role. */
    name?: string;
    /** The set of actions that a User with this Role can perform. Possible enum values include: `VIEW`, `CREATE`, `EDIT`, `DELETE`, `CLOSE`, and `ASSIGN`. */
    ticketActions?: (Merge.ticketing.RoleTicketActionsItem | undefined)[];
    /**
     * The level of Ticket access that a User with this Role can perform.
     *
     * - `ALL` - ALL
     * - `ASSIGNED_ONLY` - ASSIGNED_ONLY
     * - `TEAM_ONLY` - TEAM_ONLY
     */
    ticketAccess?: Merge.ticketing.RoleTicketAccess;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
