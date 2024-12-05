/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ComponentTypeEnum: core.serialization.Schema<
    serializers.accounting.ComponentTypeEnum.Raw,
    Merge.accounting.ComponentTypeEnum
> = core.serialization.enum_(["SALES", "PURCHASE"]);

export declare namespace ComponentTypeEnum {
    type Raw = "SALES" | "PURCHASE";
}
