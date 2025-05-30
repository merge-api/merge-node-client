/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const IssueStatusEnum: core.serialization.Schema<
    serializers.filestorage.IssueStatusEnum.Raw,
    Merge.filestorage.IssueStatusEnum
> = core.serialization.enum_(["ONGOING", "RESOLVED"]);

export declare namespace IssueStatusEnum {
    export type Raw = "ONGOING" | "RESOLVED";
}
