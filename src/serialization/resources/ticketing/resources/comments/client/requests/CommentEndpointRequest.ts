/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const CommentEndpointRequest: core.serialization.Schema<
    serializers.ticketing.CommentEndpointRequest.Raw,
    Omit<Merge.ticketing.CommentEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).ticketing.CommentRequest),
});

export declare namespace CommentEndpointRequest {
    interface Raw {
        model: serializers.ticketing.CommentRequest.Raw;
    }
}
