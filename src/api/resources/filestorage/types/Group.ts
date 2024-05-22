/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Group Object
 *
 * ### Description
 *
 * The `Group` object is used to represent any subset of `User`s. This can extend to company domains as well.
 *
 * ### Usage Example
 *
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
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
