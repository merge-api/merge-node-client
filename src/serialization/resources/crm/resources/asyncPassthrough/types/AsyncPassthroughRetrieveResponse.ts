/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const AsyncPassthroughRetrieveResponse: core.serialization.Schema<
    serializers.crm.AsyncPassthroughRetrieveResponse.Raw,
    Merge.crm.AsyncPassthroughRetrieveResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("../../../../..")).crm.RemoteResponse),
    core.serialization.string(),
]);

export declare namespace AsyncPassthroughRetrieveResponse {
    type Raw = serializers.crm.RemoteResponse.Raw | string;
}
