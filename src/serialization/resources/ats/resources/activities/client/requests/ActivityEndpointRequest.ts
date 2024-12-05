/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Merge from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ActivityRequest } from "../../../../types/ActivityRequest";

export const ActivityEndpointRequest: core.serialization.Schema<
    serializers.ats.ActivityEndpointRequest.Raw,
    Omit<Merge.ats.ActivityEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: ActivityRequest,
    remoteUserId: core.serialization.property("remote_user_id", core.serialization.string()),
});

export declare namespace ActivityEndpointRequest {
    interface Raw {
        model: ActivityRequest.Raw;
        remote_user_id: string;
    }
}
