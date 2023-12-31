/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScheduledInterviewRequestStatus: core.serialization.Schema<
    serializers.ats.ScheduledInterviewRequestStatus.Raw,
    Merge.ats.ScheduledInterviewRequestStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.ScheduledInterviewStatusEnum),
    core.serialization.string(),
]);

export declare namespace ScheduledInterviewRequestStatus {
    type Raw = serializers.ats.ScheduledInterviewStatusEnum.Raw | string;
}
