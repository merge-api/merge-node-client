/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteEndpointInfo } from "./RemoteEndpointInfo";
import { AdvancedMetadata } from "./AdvancedMetadata";
import { RemoteFieldApiCoverage } from "./RemoteFieldApiCoverage";

export const RemoteFieldApi: core.serialization.ObjectSchema<
    serializers.accounting.RemoteFieldApi.Raw,
    Merge.accounting.RemoteFieldApi
> = core.serialization.object({
    schema: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    remoteKeyName: core.serialization.property("remote_key_name", core.serialization.string()),
    remoteEndpointInfo: core.serialization.property("remote_endpoint_info", RemoteEndpointInfo),
    exampleValues: core.serialization.property(
        "example_values",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
    advancedMetadata: core.serialization.property("advanced_metadata", AdvancedMetadata.optional()),
    coverage: RemoteFieldApiCoverage.optional(),
});

export declare namespace RemoteFieldApi {
    interface Raw {
        schema: Record<string, unknown>;
        remote_key_name: string;
        remote_endpoint_info: RemoteEndpointInfo.Raw;
        example_values?: unknown[] | null;
        advanced_metadata?: AdvancedMetadata.Raw | null;
        coverage?: RemoteFieldApiCoverage.Raw | null;
    }
}
