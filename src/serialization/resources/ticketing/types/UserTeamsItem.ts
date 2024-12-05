/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Team } from "./Team";

export const UserTeamsItem: core.serialization.Schema<
    serializers.ticketing.UserTeamsItem.Raw,
    Merge.ticketing.UserTeamsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Team]);

export declare namespace UserTeamsItem {
    type Raw = string | Team.Raw;
}
