/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Team } from "./Team";

export const TicketRequestAssignedTeamsItem: core.serialization.Schema<
    serializers.ticketing.TicketRequestAssignedTeamsItem.Raw,
    Merge.ticketing.TicketRequestAssignedTeamsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Team]);

export declare namespace TicketRequestAssignedTeamsItem {
    export type Raw = string | Team.Raw;
}
