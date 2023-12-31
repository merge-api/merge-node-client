/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketContact: core.serialization.Schema<
    serializers.ticketing.TicketContact.Raw,
    Merge.ticketing.TicketContact
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Contact),
]);

export declare namespace TicketContact {
    type Raw = string | serializers.ticketing.Contact.Raw;
}
