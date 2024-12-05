/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const RequestFormatEnum: core.serialization.Schema<
    serializers.ticketing.RequestFormatEnum.Raw,
    Merge.ticketing.RequestFormatEnum
> = core.serialization.enum_(["JSON", "XML", "MULTIPART"]);

export declare namespace RequestFormatEnum {
    type Raw = "JSON" | "XML" | "MULTIPART";
}
