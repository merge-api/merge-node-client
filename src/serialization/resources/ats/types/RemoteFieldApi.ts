/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldApi: core.serialization.ObjectSchema<
    serializers.ats.RemoteFieldApi.Raw,
    Merge.ats.RemoteFieldApi
> = core.serialization.object({
    schema: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    remoteKeyName: core.serialization.property("remote_key_name", core.serialization.string()),
    remoteEndpointInfo: core.serialization.property(
        "remote_endpoint_info",
        core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteEndpointInfo)
    ),
    exampleValues: core.serialization.property(
        "example_values",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
    advancedMetadata: core.serialization.property(
        "advanced_metadata",
        core.serialization.lazyObject(async () => (await import("../../..")).ats.AdvancedMetadata).optional()
    ),
    coverage: core.serialization.lazy(async () => (await import("../../..")).ats.RemoteFieldApiCoverage).optional(),
});

export declare namespace RemoteFieldApi {
    interface Raw {
        schema: Record<string, unknown>;
        remote_key_name: string;
        remote_endpoint_info: serializers.ats.RemoteEndpointInfo.Raw;
        example_values?: unknown[] | null;
        advanced_metadata?: serializers.ats.AdvancedMetadata.Raw | null;
        coverage?: serializers.ats.RemoteFieldApiCoverage.Raw | null;
    }
}
