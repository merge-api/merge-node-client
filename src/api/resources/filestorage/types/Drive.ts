/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Drive Object
 *
 * ### Description
 *
 * The `Drive` object is used to represent a drive that contains the folders and files in the user's workspace.
 *
 * ### Usage Example
 *
 * Fetch from the `GET /api/filestorage/v1/drives` endpoint and view their drives.
 */
export interface Drive {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The drive's name. */
    name?: string;
    /** When the third party's drive was created. */
    remoteCreatedAt?: Date;
    /** The drive's url. */
    driveUrl?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
