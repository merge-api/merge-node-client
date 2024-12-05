/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EncodingEnum } from "./EncodingEnum";

export const MultipartFormFieldRequestEncoding: core.serialization.Schema<
    serializers.ticketing.MultipartFormFieldRequestEncoding.Raw,
    Merge.ticketing.MultipartFormFieldRequestEncoding
> = core.serialization.undiscriminatedUnion([EncodingEnum, core.serialization.string()]);

export declare namespace MultipartFormFieldRequestEncoding {
    type Raw = EncodingEnum.Raw | string;
}
