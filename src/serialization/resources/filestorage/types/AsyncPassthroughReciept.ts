/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AsyncPassthroughReciept: core.serialization.ObjectSchema<
    serializers.filestorage.AsyncPassthroughReciept.Raw,
    Merge.filestorage.AsyncPassthroughReciept
> = core.serialization.object({
    asyncPassthroughReceiptId: core.serialization.property("async_passthrough_receipt_id", core.serialization.string()),
});

export declare namespace AsyncPassthroughReciept {
    export interface Raw {
        async_passthrough_receipt_id: string;
    }
}
