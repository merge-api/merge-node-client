/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.filestorage.selectiveSync.configurationsUpdate.Response.Raw,
    Merge.filestorage.LinkedAccountSelectiveSyncConfiguration[]
> = core.serialization.list(
    core.serialization.lazyObject(
        async () => (await import("../../../../..")).filestorage.LinkedAccountSelectiveSyncConfiguration
    )
);

export declare namespace Response {
    type Raw = serializers.filestorage.LinkedAccountSelectiveSyncConfiguration.Raw[];
}
