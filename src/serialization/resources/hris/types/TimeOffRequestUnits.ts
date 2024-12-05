/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { UnitsEnum } from "./UnitsEnum";

export const TimeOffRequestUnits: core.serialization.Schema<
    serializers.hris.TimeOffRequestUnits.Raw,
    Merge.hris.TimeOffRequestUnits
> = core.serialization.undiscriminatedUnion([UnitsEnum, core.serialization.string()]);

export declare namespace TimeOffRequestUnits {
    type Raw = UnitsEnum.Raw | string;
}
