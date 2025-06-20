/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { IgnoreCommonModelRequestReason } from "./IgnoreCommonModelRequestReason";

export const IgnoreCommonModelRequest: core.serialization.ObjectSchema<
    serializers.crm.IgnoreCommonModelRequest.Raw,
    Merge.crm.IgnoreCommonModelRequest
> = core.serialization.object({
    reason: IgnoreCommonModelRequestReason,
    message: core.serialization.string().optional(),
});

export declare namespace IgnoreCommonModelRequest {
    export interface Raw {
        reason: IgnoreCommonModelRequestReason.Raw;
        message?: string | null;
    }
}
