/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const ApplicationsListRequestExpand: core.serialization.Schema<
    serializers.ats.ApplicationsListRequestExpand.Raw,
    Merge.ats.ApplicationsListRequestExpand
> = core.serialization.enum_([
    "candidate",
    "candidate,credited_to",
    "candidate,credited_to,current_stage",
    "candidate,credited_to,current_stage,reject_reason",
    "candidate,credited_to,reject_reason",
    "candidate,current_stage",
    "candidate,current_stage,reject_reason",
    "candidate,job",
    "candidate,job,credited_to",
    "candidate,job,credited_to,current_stage",
    "candidate,job,credited_to,current_stage,reject_reason",
    "candidate,job,credited_to,reject_reason",
    "candidate,job,current_stage",
    "candidate,job,current_stage,reject_reason",
    "candidate,job,reject_reason",
    "candidate,reject_reason",
    "credited_to",
    "credited_to,current_stage",
    "credited_to,current_stage,reject_reason",
    "credited_to,reject_reason",
    "current_stage",
    "current_stage,reject_reason",
    "job",
    "job,credited_to",
    "job,credited_to,current_stage",
    "job,credited_to,current_stage,reject_reason",
    "job,credited_to,reject_reason",
    "job,current_stage",
    "job,current_stage,reject_reason",
    "job,reject_reason",
    "reject_reason",
]);

export declare namespace ApplicationsListRequestExpand {
    type Raw =
        | "candidate"
        | "candidate,credited_to"
        | "candidate,credited_to,current_stage"
        | "candidate,credited_to,current_stage,reject_reason"
        | "candidate,credited_to,reject_reason"
        | "candidate,current_stage"
        | "candidate,current_stage,reject_reason"
        | "candidate,job"
        | "candidate,job,credited_to"
        | "candidate,job,credited_to,current_stage"
        | "candidate,job,credited_to,current_stage,reject_reason"
        | "candidate,job,credited_to,reject_reason"
        | "candidate,job,current_stage"
        | "candidate,job,current_stage,reject_reason"
        | "candidate,job,reject_reason"
        | "candidate,reject_reason"
        | "credited_to"
        | "credited_to,current_stage"
        | "credited_to,current_stage,reject_reason"
        | "credited_to,reject_reason"
        | "current_stage"
        | "current_stage,reject_reason"
        | "job"
        | "job,credited_to"
        | "job,credited_to,current_stage"
        | "job,credited_to,current_stage,reject_reason"
        | "job,credited_to,reject_reason"
        | "job,current_stage"
        | "job,current_stage,reject_reason"
        | "job,reject_reason"
        | "reject_reason";
}
