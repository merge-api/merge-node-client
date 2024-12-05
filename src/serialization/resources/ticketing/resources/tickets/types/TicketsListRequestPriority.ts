/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TicketsListRequestPriority: core.serialization.Schema<
    serializers.ticketing.TicketsListRequestPriority.Raw,
    Merge.ticketing.TicketsListRequestPriority
> = core.serialization.enum_(["HIGH", "LOW", "NORMAL", "URGENT"]);

export declare namespace TicketsListRequestPriority {
    type Raw = "HIGH" | "LOW" | "NORMAL" | "URGENT";
}
