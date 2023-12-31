/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const TicketingAttachmentEndpointRequest: core.serialization.Schema<
    serializers.ticketing.TicketingAttachmentEndpointRequest.Raw,
    Omit<Merge.ticketing.TicketingAttachmentEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).ticketing.AttachmentRequest),
});

export declare namespace TicketingAttachmentEndpointRequest {
    interface Raw {
        model: serializers.ticketing.AttachmentRequest.Raw;
    }
}
