/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FilePermissions: core.serialization.Schema<
    serializers.filestorage.FilePermissions.Raw,
    Merge.filestorage.FilePermissions
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.unknown(),
    core.serialization.list(
        core.serialization.lazy(async () => (await import("../../..")).filestorage.FilePermissionsItem)
    ),
]);

export declare namespace FilePermissions {
    type Raw = string | unknown | serializers.filestorage.FilePermissionsItem.Raw[];
}
