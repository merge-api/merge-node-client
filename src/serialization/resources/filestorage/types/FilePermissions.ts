/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PermissionRequest } from "./PermissionRequest";
import { FilePermissionsItem } from "./FilePermissionsItem";

export const FilePermissions: core.serialization.Schema<
    serializers.filestorage.FilePermissions.Raw,
    Merge.filestorage.FilePermissions
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    PermissionRequest,
    core.serialization.list(FilePermissionsItem),
]);

export declare namespace FilePermissions {
    type Raw = string | PermissionRequest.Raw | FilePermissionsItem.Raw[];
}
