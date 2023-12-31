/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.ticketing.selectiveSync.configurationsUpdate.Response.Raw,
    Merge.ticketing.LinkedAccountSelectiveSyncConfiguration[]
> = core.serialization.list(
    core.serialization.lazyObject(
        async () => (await import("../../../../..")).ticketing.LinkedAccountSelectiveSyncConfiguration
    )
);

export declare namespace Response {
    type Raw = serializers.ticketing.LinkedAccountSelectiveSyncConfiguration.Raw[];
}
