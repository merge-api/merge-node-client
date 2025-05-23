/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EngagementType } from "./EngagementType";

export const EngagementRequestEngagementType: core.serialization.Schema<
    serializers.crm.EngagementRequestEngagementType.Raw,
    Merge.crm.EngagementRequestEngagementType
> = core.serialization.undiscriminatedUnion([core.serialization.string(), EngagementType]);

export declare namespace EngagementRequestEngagementType {
    export type Raw = string | EngagementType.Raw;
}
