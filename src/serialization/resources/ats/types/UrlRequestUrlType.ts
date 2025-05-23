/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { UrlTypeEnum } from "./UrlTypeEnum";

export const UrlRequestUrlType: core.serialization.Schema<
    serializers.ats.UrlRequestUrlType.Raw,
    Merge.ats.UrlRequestUrlType
> = core.serialization.undiscriminatedUnion([UrlTypeEnum, core.serialization.string()]);

export declare namespace UrlRequestUrlType {
    export type Raw = UrlTypeEnum.Raw | string;
}
