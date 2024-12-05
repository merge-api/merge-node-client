/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TicketsRetrieveRequestRemoteFields: core.serialization.Schema<
    serializers.ticketing.TicketsRetrieveRequestRemoteFields.Raw,
    Merge.ticketing.TicketsRetrieveRequestRemoteFields
> = core.serialization.enum_([
    "priority",
    "priority,status",
    "priority,status,ticket_type",
    "priority,ticket_type",
    "status",
    "status,ticket_type",
    "ticket_type",
]);

export declare namespace TicketsRetrieveRequestRemoteFields {
    type Raw =
        | "priority"
        | "priority,status"
        | "priority,status,ticket_type"
        | "priority,ticket_type"
        | "status"
        | "status,ticket_type"
        | "ticket_type";
}
