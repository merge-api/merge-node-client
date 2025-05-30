/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PermissionRequest } from "./PermissionRequest";
import { FileRequestPermissionsItem } from "./FileRequestPermissionsItem";

export const FileRequestPermissions: core.serialization.Schema<
    serializers.filestorage.FileRequestPermissions.Raw,
    Merge.filestorage.FileRequestPermissions
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    PermissionRequest,
    core.serialization.list(FileRequestPermissionsItem),
]);

export declare namespace FileRequestPermissions {
    export type Raw = string | PermissionRequest.Raw | FileRequestPermissionsItem.Raw[];
}
