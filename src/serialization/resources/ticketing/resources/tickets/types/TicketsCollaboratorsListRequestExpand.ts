/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TicketsCollaboratorsListRequestExpand: core.serialization.Schema<
    serializers.ticketing.TicketsCollaboratorsListRequestExpand.Raw,
    Merge.ticketing.TicketsCollaboratorsListRequestExpand
> = core.serialization.enum_(["roles", "teams", "teams,roles"]);

export declare namespace TicketsCollaboratorsListRequestExpand {
    type Raw = "roles" | "teams" | "teams,roles";
}
