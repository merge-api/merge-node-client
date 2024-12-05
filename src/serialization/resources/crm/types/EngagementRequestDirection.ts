/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { DirectionEnum } from "./DirectionEnum";

export const EngagementRequestDirection: core.serialization.Schema<
    serializers.crm.EngagementRequestDirection.Raw,
    Merge.crm.EngagementRequestDirection
> = core.serialization.undiscriminatedUnion([DirectionEnum, core.serialization.string()]);

export declare namespace EngagementRequestDirection {
    type Raw = DirectionEnum.Raw | string;
}
