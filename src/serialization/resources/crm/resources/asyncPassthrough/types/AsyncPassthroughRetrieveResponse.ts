/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RemoteResponse } from "../../../types/RemoteResponse";

export const AsyncPassthroughRetrieveResponse: core.serialization.Schema<
    serializers.crm.AsyncPassthroughRetrieveResponse.Raw,
    Merge.crm.AsyncPassthroughRetrieveResponse
> = core.serialization.undiscriminatedUnion([RemoteResponse, core.serialization.string()]);

export declare namespace AsyncPassthroughRetrieveResponse {
    type Raw = RemoteResponse.Raw | string;
}
