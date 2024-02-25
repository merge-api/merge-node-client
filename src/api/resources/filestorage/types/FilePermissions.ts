/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details under `GET /files`.
 */
export type FilePermissions = string | Merge.filestorage.PermissionRequest | Merge.filestorage.FilePermissionsItem[];
