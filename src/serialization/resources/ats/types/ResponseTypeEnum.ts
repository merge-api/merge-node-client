/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ResponseTypeEnum: core.serialization.Schema<
    serializers.ats.ResponseTypeEnum.Raw,
    Merge.ats.ResponseTypeEnum
> = core.serialization.enum_(["JSON", "BASE64_GZIP"]);

export declare namespace ResponseTypeEnum {
    export type Raw = "JSON" | "BASE64_GZIP";
}
