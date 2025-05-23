/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Merge from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ApplicationRequest } from "../../../../types/ApplicationRequest";

export const ApplicationEndpointRequest: core.serialization.Schema<
    serializers.ats.ApplicationEndpointRequest.Raw,
    Omit<Merge.ats.ApplicationEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: ApplicationRequest,
    remoteUserId: core.serialization.property("remote_user_id", core.serialization.string()),
});

export declare namespace ApplicationEndpointRequest {
    export interface Raw {
        model: ApplicationRequest.Raw;
        remote_user_id: string;
    }
}
