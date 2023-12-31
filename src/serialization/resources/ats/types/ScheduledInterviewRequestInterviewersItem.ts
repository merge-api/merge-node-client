/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScheduledInterviewRequestInterviewersItem: core.serialization.Schema<
    serializers.ats.ScheduledInterviewRequestInterviewersItem.Raw,
    Merge.ats.ScheduledInterviewRequestInterviewersItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteUser),
]);

export declare namespace ScheduledInterviewRequestInterviewersItem {
    type Raw = string | serializers.ats.RemoteUser.Raw;
}
