/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const FieldTypeEnum: core.serialization.Schema<serializers.crm.FieldTypeEnum.Raw, Merge.crm.FieldTypeEnum> =
    core.serialization.enum_(["string", "number", "date", "datetime", "bool", "list"]);

export declare namespace FieldTypeEnum {
    export type Raw = "string" | "number" | "date" | "datetime" | "bool" | "list";
}
