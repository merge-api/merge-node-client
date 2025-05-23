/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Group Object
 * ### Description
 * The `Group` object is used to represent any subset of `Users`. This can extend to company domains as well.
 * ### Usage Example
 * Fetch from the `GET /api/filestorage/v1/groups` endpoint and view their groups.
 */
export interface Group {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The group's name. */
    name?: string;
    /** The users that belong in the group. If null, this typically means it's either a domain or the third-party platform does not surface this information. */
    users: string[];
    /** Groups that inherit the permissions of the parent group. */
    childGroups?: Merge.filestorage.GroupChildGroupsItem[];
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.filestorage.RemoteData[];
}
