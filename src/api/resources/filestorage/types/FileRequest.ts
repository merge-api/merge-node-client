/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The File Object
 *
 * ### Description
 *
 * The `File` object is used to represent a file in the workspace. The Object typically exists under a folder or drive, if it exists.
 *
 * ### Usage Example
 *
 * Fetch from the `GET /api/filestorage/v1/files` endpoint and view their files.
 */
export interface FileRequest {
    /** The file's name. */
    name?: string;
    /** The URL to access the file. */
    fileUrl?: string;
    /** The URL that produces a thumbnail preview of the file. Typically an image. */
    fileThumbnailUrl?: string;
    /** The file's size, in bytes. */
    size?: number;
    /** The file's mime type. */
    mimeType?: string;
    /** The file's description. */
    description?: string;
    /** The folder that the file belongs to. */
    folder?: Merge.filestorage.FileRequestFolder;
    /** The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details under `GET /files`. */
    permissions?: Merge.filestorage.FileRequestPermissions;
    /** The drive that the file belongs to. */
    drive?: Merge.filestorage.FileRequestDrive;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
