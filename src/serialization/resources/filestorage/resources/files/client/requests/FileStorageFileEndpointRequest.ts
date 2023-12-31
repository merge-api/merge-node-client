/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const FileStorageFileEndpointRequest: core.serialization.Schema<
    serializers.filestorage.FileStorageFileEndpointRequest.Raw,
    Omit<Merge.filestorage.FileStorageFileEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).filestorage.FileRequest),
});

export declare namespace FileStorageFileEndpointRequest {
    interface Raw {
        model: serializers.filestorage.FileRequest.Raw;
    }
}
