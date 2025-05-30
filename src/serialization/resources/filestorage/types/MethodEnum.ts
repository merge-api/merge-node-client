/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const MethodEnum: core.serialization.Schema<
    serializers.filestorage.MethodEnum.Raw,
    Merge.filestorage.MethodEnum
> = core.serialization.enum_(["GET", "OPTIONS", "HEAD", "POST", "PUT", "PATCH", "DELETE"]);

export declare namespace MethodEnum {
    export type Raw = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
}
