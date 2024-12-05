/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const TimeOffStatusEnum: core.serialization.Schema<
    serializers.hris.TimeOffStatusEnum.Raw,
    Merge.hris.TimeOffStatusEnum
> = core.serialization.enum_(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]);

export declare namespace TimeOffStatusEnum {
    type Raw = "REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED";
}
