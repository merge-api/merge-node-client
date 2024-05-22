/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Permission Object
 *
 * ### Description
 *
 * The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default.
 *
 * ### Usage Example
 *
 * Fetch from the `GET Files` or `GET Folders` endpoint. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details.
 */
export interface Permission {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The user that is granted this permission. */
    user?: Merge.filestorage.PermissionUser;
    /** The group that is granted this permission. */
    group?: Merge.filestorage.PermissionGroup;
    /**
     * Denotes what type of people have access to the file.
     *
     * - `USER` - USER
     * - `GROUP` - GROUP
     * - `COMPANY` - COMPANY
     * - `ANYONE` - ANYONE
     */
    type?: Merge.filestorage.PermissionType;
    /** The permissions that the user or group has for the File or Folder. It is possible for a user or group to have multiple roles, such as viewing & uploading. Possible values include: `READ`, `WRITE`, `OWNER`. In cases where there is no clear mapping, the original value passed through will be returned. */
    roles?: (Merge.filestorage.PermissionRolesItem | undefined)[];
}
