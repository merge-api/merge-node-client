/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Folder Object
 *
 * ### Description
 *
 * The `Folder` object is used to represent a collection of files and/or folders in the workspace. Could be within a drive, if it exists.
 *
 * ### Usage Example
 *
 * Fetch from the `GET /api/filestorage/v1/folders` endpoint and view their folders.
 */
export interface Folder {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The folder's name. */
    name?: string;
    /** The URL to access the folder. */
    folderUrl?: string;
    /** The folder's size, in bytes. */
    size?: number;
    /** The folder's description. */
    description?: string;
    /** The folder that the folder belongs to. */
    parentFolder?: Merge.filestorage.FolderParentFolder;
    /** The drive that the folder belongs to. */
    drive?: Merge.filestorage.FolderDrive;
    /** The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details under `GET /folders`. */
    permissions?: Merge.filestorage.FolderPermissions;
    /** When the third party's folder was created. */
    remoteCreatedAt?: Date;
    /** When the third party's folder was updated. */
    remoteUpdatedAt?: Date;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
