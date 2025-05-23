/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Merge from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { VendorCreditRequest } from "../../../../types/VendorCreditRequest";

export const VendorCreditEndpointRequest: core.serialization.Schema<
    serializers.accounting.VendorCreditEndpointRequest.Raw,
    Omit<Merge.accounting.VendorCreditEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: VendorCreditRequest,
});

export declare namespace VendorCreditEndpointRequest {
    export interface Raw {
        model: VendorCreditRequest.Raw;
    }
}
