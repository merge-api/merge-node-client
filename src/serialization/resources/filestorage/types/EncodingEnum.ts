/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const EncodingEnum: core.serialization.Schema<
    serializers.filestorage.EncodingEnum.Raw,
    Merge.filestorage.EncodingEnum
> = core.serialization.enum_(["RAW", "BASE64", "GZIP_BASE64"]);

export declare namespace EncodingEnum {
    type Raw = "RAW" | "BASE64" | "GZIP_BASE64";
}
