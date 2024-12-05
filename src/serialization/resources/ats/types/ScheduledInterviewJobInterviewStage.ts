/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { JobInterviewStage } from "./JobInterviewStage";

export const ScheduledInterviewJobInterviewStage: core.serialization.Schema<
    serializers.ats.ScheduledInterviewJobInterviewStage.Raw,
    Merge.ats.ScheduledInterviewJobInterviewStage
> = core.serialization.undiscriminatedUnion([core.serialization.string(), JobInterviewStage]);

export declare namespace ScheduledInterviewJobInterviewStage {
    type Raw = string | JobInterviewStage.Raw;
}
