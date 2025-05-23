/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const PayFrequencyEnum: core.serialization.Schema<
    serializers.hris.PayFrequencyEnum.Raw,
    Merge.hris.PayFrequencyEnum
> = core.serialization.enum_([
    "WEEKLY",
    "BIWEEKLY",
    "MONTHLY",
    "QUARTERLY",
    "SEMIANNUALLY",
    "ANNUALLY",
    "THIRTEEN-MONTHLY",
    "PRO_RATA",
    "SEMIMONTHLY",
]);

export declare namespace PayFrequencyEnum {
    export type Raw =
        | "WEEKLY"
        | "BIWEEKLY"
        | "MONTHLY"
        | "QUARTERLY"
        | "SEMIANNUALLY"
        | "ANNUALLY"
        | "THIRTEEN-MONTHLY"
        | "PRO_RATA"
        | "SEMIMONTHLY";
}
