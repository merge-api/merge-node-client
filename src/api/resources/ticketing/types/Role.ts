/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Role Object
 * ### Description
 * The `Role` object is used to represent the set of actions & access that a user with this role is allowed to perform.
 *
 * ### Usage Example
 * TODO
 */
export interface Role {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The name of the Role. */
    name?: string;
    /** The set of actions that a User with this Role can perform. Possible enum values include: `VIEW`, `CREATE`, `EDIT`, `DELETE`, `CLOSE`, and `ASSIGN`. */
    ticketActions?: (Merge.ticketing.RoleTicketActionsItem | undefined)[];
    /**
     * The level of Ticket access that a User with this Role can perform.
     *
     * * `ALL` - ALL
     * * `ASSIGNED_ONLY` - ASSIGNED_ONLY
     * * `TEAM_ONLY` - TEAM_ONLY
     */
    ticketAccess?: Merge.ticketing.RoleTicketAccess;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
