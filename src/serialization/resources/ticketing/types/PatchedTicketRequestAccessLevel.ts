/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TicketAccessLevelEnum } from "./TicketAccessLevelEnum";

export const PatchedTicketRequestAccessLevel: core.serialization.Schema<
    serializers.ticketing.PatchedTicketRequestAccessLevel.Raw,
    Merge.ticketing.PatchedTicketRequestAccessLevel
> = core.serialization.undiscriminatedUnion([TicketAccessLevelEnum, core.serialization.string()]);

export declare namespace PatchedTicketRequestAccessLevel {
    export type Raw = TicketAccessLevelEnum.Raw | string;
}
