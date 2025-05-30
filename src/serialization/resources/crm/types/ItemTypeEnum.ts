/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ItemTypeEnum: core.serialization.Schema<serializers.crm.ItemTypeEnum.Raw, Merge.crm.ItemTypeEnum> =
    core.serialization.enum_(["string", "number", "date", "datetime", "bool", "list"]);

export declare namespace ItemTypeEnum {
    export type Raw = "string" | "number" | "date" | "datetime" | "bool" | "list";
}
