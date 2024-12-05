/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ScheduledInterviewStatusEnum } from "./ScheduledInterviewStatusEnum";

export const ScheduledInterviewStatus: core.serialization.Schema<
    serializers.ats.ScheduledInterviewStatus.Raw,
    Merge.ats.ScheduledInterviewStatus
> = core.serialization.undiscriminatedUnion([ScheduledInterviewStatusEnum, core.serialization.string()]);

export declare namespace ScheduledInterviewStatus {
    type Raw = ScheduledInterviewStatusEnum.Raw | string;
}
