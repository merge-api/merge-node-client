/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FolderRequestPermissions: core.serialization.Schema<
    serializers.filestorage.FolderRequestPermissions.Raw,
    Merge.filestorage.FolderRequestPermissions
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).filestorage.PermissionRequest),
    core.serialization.list(
        core.serialization.lazy(async () => (await import("../../..")).filestorage.FolderRequestPermissionsItem)
    ),
]);

export declare namespace FolderRequestPermissions {
    type Raw =
        | string
        | serializers.filestorage.PermissionRequest.Raw
        | serializers.filestorage.FolderRequestPermissionsItem.Raw[];
}
