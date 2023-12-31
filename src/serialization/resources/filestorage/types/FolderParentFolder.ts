/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FolderParentFolder: core.serialization.Schema<
    serializers.filestorage.FolderParentFolder.Raw,
    Merge.filestorage.FolderParentFolder
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).filestorage.Folder),
]);

export declare namespace FolderParentFolder {
    type Raw = string | serializers.filestorage.Folder.Raw;
}
