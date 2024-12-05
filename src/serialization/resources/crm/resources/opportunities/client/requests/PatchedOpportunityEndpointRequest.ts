/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Merge from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { PatchedOpportunityRequest } from "../../../../types/PatchedOpportunityRequest";

export const PatchedOpportunityEndpointRequest: core.serialization.Schema<
    serializers.crm.PatchedOpportunityEndpointRequest.Raw,
    Omit<Merge.crm.PatchedOpportunityEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: PatchedOpportunityRequest,
});

export declare namespace PatchedOpportunityEndpointRequest {
    interface Raw {
        model: PatchedOpportunityRequest.Raw;
    }
}
