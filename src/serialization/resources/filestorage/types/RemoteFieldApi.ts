/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldApi: core.serialization.ObjectSchema<
    serializers.filestorage.RemoteFieldApi.Raw,
    Merge.filestorage.RemoteFieldApi
> = core.serialization.object({
    schema: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    remoteKeyName: core.serialization.property("remote_key_name", core.serialization.string()),
    remoteEndpointInfo: core.serialization.property(
        "remote_endpoint_info",
        core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteEndpointInfo)
    ),
    exampleValues: core.serialization.property("example_values", core.serialization.list(core.serialization.unknown())),
    advancedMetadata: core.serialization.property(
        "advanced_metadata",
        core.serialization.lazyObject(async () => (await import("../../..")).filestorage.AdvancedMetadata).optional()
    ),
    coverage: core.serialization
        .lazy(async () => (await import("../../..")).filestorage.RemoteFieldApiCoverage)
        .optional(),
});

export declare namespace RemoteFieldApi {
    interface Raw {
        schema: Record<string, unknown>;
        remote_key_name: string;
        remote_endpoint_info: serializers.filestorage.RemoteEndpointInfo.Raw;
        example_values: unknown[];
        advanced_metadata?: serializers.filestorage.AdvancedMetadata.Raw | null;
        coverage?: serializers.filestorage.RemoteFieldApiCoverage.Raw | null;
    }
}
