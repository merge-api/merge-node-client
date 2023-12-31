/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const IssueStatus: core.serialization.Schema<serializers.crm.IssueStatus.Raw, Merge.crm.IssueStatus> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazy(async () => (await import("../../..")).crm.IssueStatusEnum),
        core.serialization.string(),
    ]);

export declare namespace IssueStatus {
    type Raw = serializers.crm.IssueStatusEnum.Raw | string;
}
