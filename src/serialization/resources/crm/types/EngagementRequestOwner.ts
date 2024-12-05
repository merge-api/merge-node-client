/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const EngagementRequestOwner: core.serialization.Schema<
    serializers.crm.EngagementRequestOwner.Raw,
    Merge.crm.EngagementRequestOwner
> = core.serialization.undiscriminatedUnion([core.serialization.string(), User]);

export declare namespace EngagementRequestOwner {
    type Raw = string | User.Raw;
}
