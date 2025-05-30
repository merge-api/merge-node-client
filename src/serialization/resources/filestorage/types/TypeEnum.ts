/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const TypeEnum: core.serialization.Schema<serializers.filestorage.TypeEnum.Raw, Merge.filestorage.TypeEnum> =
    core.serialization.enum_(["USER", "GROUP", "COMPANY", "ANYONE"]);

export declare namespace TypeEnum {
    export type Raw = "USER" | "GROUP" | "COMPANY" | "ANYONE";
}
