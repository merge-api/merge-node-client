/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const CandidateEndpointRequest: core.serialization.Schema<
    serializers.ats.CandidateEndpointRequest.Raw,
    Omit<Merge.ats.CandidateEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).ats.CandidateRequest),
    remoteUserId: core.serialization.property("remote_user_id", core.serialization.string()),
});

export declare namespace CandidateEndpointRequest {
    interface Raw {
        model: serializers.ats.CandidateRequest.Raw;
        remote_user_id: string;
    }
}
