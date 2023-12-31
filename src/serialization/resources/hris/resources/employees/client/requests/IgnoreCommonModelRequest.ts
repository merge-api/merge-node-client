/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const IgnoreCommonModelRequest: core.serialization.Schema<
    serializers.hris.IgnoreCommonModelRequest.Raw,
    Merge.hris.IgnoreCommonModelRequest
> = core.serialization.object({
    reason: core.serialization.lazy(
        async () => (await import("../../../../../..")).hris.IgnoreCommonModelRequestReason
    ),
    message: core.serialization.string().optional(),
});

export declare namespace IgnoreCommonModelRequest {
    interface Raw {
        reason: serializers.hris.IgnoreCommonModelRequestReason.Raw;
        message?: string | null;
    }
}
