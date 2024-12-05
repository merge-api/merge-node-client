/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The User Object
 *
 * ### Description
 *
 * The `User` object is used to represent an employee within a company.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface User {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The user's name. */
    name?: string;
    /** The user's email address. */
    emailAddress?: string;
    /** Whether or not the user is active. */
    isActive?: boolean;
    teams?: (Merge.ticketing.UserTeamsItem | undefined)[];
    roles?: (Merge.ticketing.UserRolesItem | undefined)[];
    /** The user's avatar picture. */
    avatar?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
