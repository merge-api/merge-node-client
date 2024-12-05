/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const EngagementOwner: core.serialization.Schema<
    serializers.crm.EngagementOwner.Raw,
    Merge.crm.EngagementOwner
> = core.serialization.undiscriminatedUnion([core.serialization.string(), User]);

export declare namespace EngagementOwner {
    type Raw = string | User.Raw;
}
