/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScheduledInterviewRequestApplication: core.serialization.Schema<
    serializers.ats.ScheduledInterviewRequestApplication.Raw,
    Merge.ats.ScheduledInterviewRequestApplication
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Application),
]);

export declare namespace ScheduledInterviewRequestApplication {
    type Raw = string | serializers.ats.Application.Raw;
}
