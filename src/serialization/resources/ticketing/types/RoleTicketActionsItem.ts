/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RoleTicketActionsItem: core.serialization.Schema<
    serializers.ticketing.RoleTicketActionsItem.Raw,
    Merge.ticketing.RoleTicketActionsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazy(async () => (await import("../../..")).ticketing.TicketActionsEnum),
]);

export declare namespace RoleTicketActionsItem {
    type Raw = string | serializers.ticketing.TicketActionsEnum.Raw;
}
