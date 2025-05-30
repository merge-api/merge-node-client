/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The RemoteUser Object
 * ### Description
 * The `RemoteUser` object is used to represent a user with a login to the ATS system.
 * ### Usage Example
 * Fetch from the `LIST RemoteUsers` endpoint to show all users for a third party.
 */
export interface RemoteUser {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The user's first name. */
    firstName?: string;
    /** The user's last name. */
    lastName?: string;
    /** The user's email. */
    email?: string;
    /** Whether the user's account had been disabled. */
    disabled?: boolean;
    /** When the third party's user was created. */
    remoteCreatedAt?: Date;
    /**
     * The user's role.
     *
     * * `SUPER_ADMIN` - SUPER_ADMIN
     * * `ADMIN` - ADMIN
     * * `TEAM_MEMBER` - TEAM_MEMBER
     * * `LIMITED_TEAM_MEMBER` - LIMITED_TEAM_MEMBER
     * * `INTERVIEWER` - INTERVIEWER
     */
    accessRole?: Merge.ats.RemoteUserAccessRole;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
