/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FileRequestDrive: core.serialization.Schema<
    serializers.filestorage.FileRequestDrive.Raw,
    Merge.filestorage.FileRequestDrive
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).filestorage.Drive),
]);

export declare namespace FileRequestDrive {
    type Raw = string | serializers.filestorage.Drive.Raw;
}
