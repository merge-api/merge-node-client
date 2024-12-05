/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const FieldFormatEnum: core.serialization.Schema<
    serializers.accounting.FieldFormatEnum.Raw,
    Merge.accounting.FieldFormatEnum
> = core.serialization.enum_(["string", "number", "date", "datetime", "bool", "list"]);

export declare namespace FieldFormatEnum {
    type Raw = "string" | "number" | "date" | "datetime" | "bool" | "list";
}
