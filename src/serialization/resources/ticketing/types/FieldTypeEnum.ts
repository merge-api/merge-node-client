/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const FieldTypeEnum: core.serialization.Schema<
    serializers.ticketing.FieldTypeEnum.Raw,
    Merge.ticketing.FieldTypeEnum
> = core.serialization.enum_(["string", "number", "date", "datetime", "bool", "list"]);

export declare namespace FieldTypeEnum {
    type Raw = "string" | "number" | "date" | "datetime" | "bool" | "list";
}
