/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const LocationTypeEnum: core.serialization.Schema<
    serializers.hris.LocationTypeEnum.Raw,
    Merge.hris.LocationTypeEnum
> = core.serialization.enum_(["HOME", "WORK"]);

export declare namespace LocationTypeEnum {
    type Raw = "HOME" | "WORK";
}
