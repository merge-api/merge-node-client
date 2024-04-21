/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const ApplicationsRetrieveRequestExpand: core.serialization.Schema<
    serializers.ats.ApplicationsRetrieveRequestExpand.Raw,
    Merge.ats.ApplicationsRetrieveRequestExpand
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
    "offers",
    "offers,candidate",
    "offers,candidate,credited_to",
    "offers,candidate,credited_to,current_stage",
    "offers,candidate,credited_to,current_stage,reject_reason",
    "offers,candidate,credited_to,reject_reason",
    "offers,candidate,current_stage",
    "offers,candidate,current_stage,reject_reason",
    "offers,candidate,job",
    "offers,candidate,job,credited_to",
    "offers,candidate,job,credited_to,current_stage",
    "offers,candidate,job,credited_to,current_stage,reject_reason",
    "offers,candidate,job,credited_to,reject_reason",
    "offers,candidate,job,current_stage",
    "offers,candidate,job,current_stage,reject_reason",
    "offers,candidate,job,reject_reason",
    "offers,candidate,reject_reason",
    "offers,credited_to",
    "offers,credited_to,current_stage",
    "offers,credited_to,current_stage,reject_reason",
    "offers,credited_to,reject_reason",
    "offers,current_stage",
    "offers,current_stage,reject_reason",
    "offers,job",
    "offers,job,credited_to",
    "offers,job,credited_to,current_stage",
    "offers,job,credited_to,current_stage,reject_reason",
    "offers,job,credited_to,reject_reason",
    "offers,job,current_stage",
    "offers,job,current_stage,reject_reason",
    "offers,job,reject_reason",
    "offers,reject_reason",
    "reject_reason",
]);

export declare namespace ApplicationsRetrieveRequestExpand {
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
        | "offers"
        | "offers,candidate"
        | "offers,candidate,credited_to"
        | "offers,candidate,credited_to,current_stage"
        | "offers,candidate,credited_to,current_stage,reject_reason"
        | "offers,candidate,credited_to,reject_reason"
        | "offers,candidate,current_stage"
        | "offers,candidate,current_stage,reject_reason"
        | "offers,candidate,job"
        | "offers,candidate,job,credited_to"
        | "offers,candidate,job,credited_to,current_stage"
        | "offers,candidate,job,credited_to,current_stage,reject_reason"
        | "offers,candidate,job,credited_to,reject_reason"
        | "offers,candidate,job,current_stage"
        | "offers,candidate,job,current_stage,reject_reason"
        | "offers,candidate,job,reject_reason"
        | "offers,candidate,reject_reason"
        | "offers,credited_to"
        | "offers,credited_to,current_stage"
        | "offers,credited_to,current_stage,reject_reason"
        | "offers,credited_to,reject_reason"
        | "offers,current_stage"
        | "offers,current_stage,reject_reason"
        | "offers,job"
        | "offers,job,credited_to"
        | "offers,job,credited_to,current_stage"
        | "offers,job,credited_to,current_stage,reject_reason"
        | "offers,job,credited_to,reject_reason"
        | "offers,job,current_stage"
        | "offers,job,current_stage,reject_reason"
        | "offers,job,reject_reason"
        | "offers,reject_reason"
        | "reject_reason";
}
