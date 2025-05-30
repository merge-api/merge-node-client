/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
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
    "offers,screening_question_answers",
    "offers,screening_question_answers,candidate",
    "offers,screening_question_answers,candidate,credited_to",
    "offers,screening_question_answers,candidate,credited_to,current_stage",
    "offers,screening_question_answers,candidate,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,candidate,credited_to,reject_reason",
    "offers,screening_question_answers,candidate,current_stage",
    "offers,screening_question_answers,candidate,current_stage,reject_reason",
    "offers,screening_question_answers,candidate,job",
    "offers,screening_question_answers,candidate,job,credited_to",
    "offers,screening_question_answers,candidate,job,credited_to,current_stage",
    "offers,screening_question_answers,candidate,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,candidate,job,credited_to,reject_reason",
    "offers,screening_question_answers,candidate,job,current_stage",
    "offers,screening_question_answers,candidate,job,current_stage,reject_reason",
    "offers,screening_question_answers,candidate,job,reject_reason",
    "offers,screening_question_answers,candidate,reject_reason",
    "offers,screening_question_answers,credited_to",
    "offers,screening_question_answers,credited_to,current_stage",
    "offers,screening_question_answers,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,credited_to,reject_reason",
    "offers,screening_question_answers,current_stage",
    "offers,screening_question_answers,current_stage,reject_reason",
    "offers,screening_question_answers,job",
    "offers,screening_question_answers,job,credited_to",
    "offers,screening_question_answers,job,credited_to,current_stage",
    "offers,screening_question_answers,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,job,credited_to,reject_reason",
    "offers,screening_question_answers,job,current_stage",
    "offers,screening_question_answers,job,current_stage,reject_reason",
    "offers,screening_question_answers,job,reject_reason",
    "offers,screening_question_answers,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question",
    "offers,screening_question_answers,screening_question_answers.question,candidate",
    "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to",
    "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,job,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,candidate,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,credited_to",
    "offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,credited_to,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,job",
    "offers,screening_question_answers,screening_question_answers.question,job,credited_to",
    "offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,job,current_stage",
    "offers,screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,job,reject_reason",
    "offers,screening_question_answers,screening_question_answers.question,reject_reason",
    "offers,screening_question_answers.question",
    "offers,screening_question_answers.question,candidate",
    "offers,screening_question_answers.question,candidate,credited_to",
    "offers,screening_question_answers.question,candidate,credited_to,current_stage",
    "offers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers.question,candidate,credited_to,reject_reason",
    "offers,screening_question_answers.question,candidate,current_stage",
    "offers,screening_question_answers.question,candidate,current_stage,reject_reason",
    "offers,screening_question_answers.question,candidate,job",
    "offers,screening_question_answers.question,candidate,job,credited_to",
    "offers,screening_question_answers.question,candidate,job,credited_to,current_stage",
    "offers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers.question,candidate,job,credited_to,reject_reason",
    "offers,screening_question_answers.question,candidate,job,current_stage",
    "offers,screening_question_answers.question,candidate,job,current_stage,reject_reason",
    "offers,screening_question_answers.question,candidate,job,reject_reason",
    "offers,screening_question_answers.question,candidate,reject_reason",
    "offers,screening_question_answers.question,credited_to",
    "offers,screening_question_answers.question,credited_to,current_stage",
    "offers,screening_question_answers.question,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers.question,credited_to,reject_reason",
    "offers,screening_question_answers.question,current_stage",
    "offers,screening_question_answers.question,current_stage,reject_reason",
    "offers,screening_question_answers.question,job",
    "offers,screening_question_answers.question,job,credited_to",
    "offers,screening_question_answers.question,job,credited_to,current_stage",
    "offers,screening_question_answers.question,job,credited_to,current_stage,reject_reason",
    "offers,screening_question_answers.question,job,credited_to,reject_reason",
    "offers,screening_question_answers.question,job,current_stage",
    "offers,screening_question_answers.question,job,current_stage,reject_reason",
    "offers,screening_question_answers.question,job,reject_reason",
    "offers,screening_question_answers.question,reject_reason",
    "reject_reason",
    "screening_question_answers",
    "screening_question_answers,candidate",
    "screening_question_answers,candidate,credited_to",
    "screening_question_answers,candidate,credited_to,current_stage",
    "screening_question_answers,candidate,credited_to,current_stage,reject_reason",
    "screening_question_answers,candidate,credited_to,reject_reason",
    "screening_question_answers,candidate,current_stage",
    "screening_question_answers,candidate,current_stage,reject_reason",
    "screening_question_answers,candidate,job",
    "screening_question_answers,candidate,job,credited_to",
    "screening_question_answers,candidate,job,credited_to,current_stage",
    "screening_question_answers,candidate,job,credited_to,current_stage,reject_reason",
    "screening_question_answers,candidate,job,credited_to,reject_reason",
    "screening_question_answers,candidate,job,current_stage",
    "screening_question_answers,candidate,job,current_stage,reject_reason",
    "screening_question_answers,candidate,job,reject_reason",
    "screening_question_answers,candidate,reject_reason",
    "screening_question_answers,credited_to",
    "screening_question_answers,credited_to,current_stage",
    "screening_question_answers,credited_to,current_stage,reject_reason",
    "screening_question_answers,credited_to,reject_reason",
    "screening_question_answers,current_stage",
    "screening_question_answers,current_stage,reject_reason",
    "screening_question_answers,job",
    "screening_question_answers,job,credited_to",
    "screening_question_answers,job,credited_to,current_stage",
    "screening_question_answers,job,credited_to,current_stage,reject_reason",
    "screening_question_answers,job,credited_to,reject_reason",
    "screening_question_answers,job,current_stage",
    "screening_question_answers,job,current_stage,reject_reason",
    "screening_question_answers,job,reject_reason",
    "screening_question_answers,reject_reason",
    "screening_question_answers,screening_question_answers.question",
    "screening_question_answers,screening_question_answers.question,candidate",
    "screening_question_answers,screening_question_answers.question,candidate,credited_to",
    "screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage",
    "screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,current_stage",
    "screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,job",
    "screening_question_answers,screening_question_answers.question,candidate,job,credited_to",
    "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage",
    "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,job,current_stage",
    "screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,job,reject_reason",
    "screening_question_answers,screening_question_answers.question,candidate,reject_reason",
    "screening_question_answers,screening_question_answers.question,credited_to",
    "screening_question_answers,screening_question_answers.question,credited_to,current_stage",
    "screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,credited_to,reject_reason",
    "screening_question_answers,screening_question_answers.question,current_stage",
    "screening_question_answers,screening_question_answers.question,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,job",
    "screening_question_answers,screening_question_answers.question,job,credited_to",
    "screening_question_answers,screening_question_answers.question,job,credited_to,current_stage",
    "screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason",
    "screening_question_answers,screening_question_answers.question,job,current_stage",
    "screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason",
    "screening_question_answers,screening_question_answers.question,job,reject_reason",
    "screening_question_answers,screening_question_answers.question,reject_reason",
    "screening_question_answers.question",
    "screening_question_answers.question,candidate",
    "screening_question_answers.question,candidate,credited_to",
    "screening_question_answers.question,candidate,credited_to,current_stage",
    "screening_question_answers.question,candidate,credited_to,current_stage,reject_reason",
    "screening_question_answers.question,candidate,credited_to,reject_reason",
    "screening_question_answers.question,candidate,current_stage",
    "screening_question_answers.question,candidate,current_stage,reject_reason",
    "screening_question_answers.question,candidate,job",
    "screening_question_answers.question,candidate,job,credited_to",
    "screening_question_answers.question,candidate,job,credited_to,current_stage",
    "screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason",
    "screening_question_answers.question,candidate,job,credited_to,reject_reason",
    "screening_question_answers.question,candidate,job,current_stage",
    "screening_question_answers.question,candidate,job,current_stage,reject_reason",
    "screening_question_answers.question,candidate,job,reject_reason",
    "screening_question_answers.question,candidate,reject_reason",
    "screening_question_answers.question,credited_to",
    "screening_question_answers.question,credited_to,current_stage",
    "screening_question_answers.question,credited_to,current_stage,reject_reason",
    "screening_question_answers.question,credited_to,reject_reason",
    "screening_question_answers.question,current_stage",
    "screening_question_answers.question,current_stage,reject_reason",
    "screening_question_answers.question,job",
    "screening_question_answers.question,job,credited_to",
    "screening_question_answers.question,job,credited_to,current_stage",
    "screening_question_answers.question,job,credited_to,current_stage,reject_reason",
    "screening_question_answers.question,job,credited_to,reject_reason",
    "screening_question_answers.question,job,current_stage",
    "screening_question_answers.question,job,current_stage,reject_reason",
    "screening_question_answers.question,job,reject_reason",
    "screening_question_answers.question,reject_reason",
]);

export declare namespace ApplicationsRetrieveRequestExpand {
    export type Raw =
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
        | "offers,screening_question_answers"
        | "offers,screening_question_answers,candidate"
        | "offers,screening_question_answers,candidate,credited_to"
        | "offers,screening_question_answers,candidate,credited_to,current_stage"
        | "offers,screening_question_answers,candidate,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,candidate,credited_to,reject_reason"
        | "offers,screening_question_answers,candidate,current_stage"
        | "offers,screening_question_answers,candidate,current_stage,reject_reason"
        | "offers,screening_question_answers,candidate,job"
        | "offers,screening_question_answers,candidate,job,credited_to"
        | "offers,screening_question_answers,candidate,job,credited_to,current_stage"
        | "offers,screening_question_answers,candidate,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,candidate,job,credited_to,reject_reason"
        | "offers,screening_question_answers,candidate,job,current_stage"
        | "offers,screening_question_answers,candidate,job,current_stage,reject_reason"
        | "offers,screening_question_answers,candidate,job,reject_reason"
        | "offers,screening_question_answers,candidate,reject_reason"
        | "offers,screening_question_answers,credited_to"
        | "offers,screening_question_answers,credited_to,current_stage"
        | "offers,screening_question_answers,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,credited_to,reject_reason"
        | "offers,screening_question_answers,current_stage"
        | "offers,screening_question_answers,current_stage,reject_reason"
        | "offers,screening_question_answers,job"
        | "offers,screening_question_answers,job,credited_to"
        | "offers,screening_question_answers,job,credited_to,current_stage"
        | "offers,screening_question_answers,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,job,credited_to,reject_reason"
        | "offers,screening_question_answers,job,current_stage"
        | "offers,screening_question_answers,job,current_stage,reject_reason"
        | "offers,screening_question_answers,job,reject_reason"
        | "offers,screening_question_answers,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question"
        | "offers,screening_question_answers,screening_question_answers.question,candidate"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,job,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,candidate,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,credited_to"
        | "offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,credited_to,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,job"
        | "offers,screening_question_answers,screening_question_answers.question,job,credited_to"
        | "offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,job,current_stage"
        | "offers,screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,job,reject_reason"
        | "offers,screening_question_answers,screening_question_answers.question,reject_reason"
        | "offers,screening_question_answers.question"
        | "offers,screening_question_answers.question,candidate"
        | "offers,screening_question_answers.question,candidate,credited_to"
        | "offers,screening_question_answers.question,candidate,credited_to,current_stage"
        | "offers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers.question,candidate,credited_to,reject_reason"
        | "offers,screening_question_answers.question,candidate,current_stage"
        | "offers,screening_question_answers.question,candidate,current_stage,reject_reason"
        | "offers,screening_question_answers.question,candidate,job"
        | "offers,screening_question_answers.question,candidate,job,credited_to"
        | "offers,screening_question_answers.question,candidate,job,credited_to,current_stage"
        | "offers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers.question,candidate,job,credited_to,reject_reason"
        | "offers,screening_question_answers.question,candidate,job,current_stage"
        | "offers,screening_question_answers.question,candidate,job,current_stage,reject_reason"
        | "offers,screening_question_answers.question,candidate,job,reject_reason"
        | "offers,screening_question_answers.question,candidate,reject_reason"
        | "offers,screening_question_answers.question,credited_to"
        | "offers,screening_question_answers.question,credited_to,current_stage"
        | "offers,screening_question_answers.question,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers.question,credited_to,reject_reason"
        | "offers,screening_question_answers.question,current_stage"
        | "offers,screening_question_answers.question,current_stage,reject_reason"
        | "offers,screening_question_answers.question,job"
        | "offers,screening_question_answers.question,job,credited_to"
        | "offers,screening_question_answers.question,job,credited_to,current_stage"
        | "offers,screening_question_answers.question,job,credited_to,current_stage,reject_reason"
        | "offers,screening_question_answers.question,job,credited_to,reject_reason"
        | "offers,screening_question_answers.question,job,current_stage"
        | "offers,screening_question_answers.question,job,current_stage,reject_reason"
        | "offers,screening_question_answers.question,job,reject_reason"
        | "offers,screening_question_answers.question,reject_reason"
        | "reject_reason"
        | "screening_question_answers"
        | "screening_question_answers,candidate"
        | "screening_question_answers,candidate,credited_to"
        | "screening_question_answers,candidate,credited_to,current_stage"
        | "screening_question_answers,candidate,credited_to,current_stage,reject_reason"
        | "screening_question_answers,candidate,credited_to,reject_reason"
        | "screening_question_answers,candidate,current_stage"
        | "screening_question_answers,candidate,current_stage,reject_reason"
        | "screening_question_answers,candidate,job"
        | "screening_question_answers,candidate,job,credited_to"
        | "screening_question_answers,candidate,job,credited_to,current_stage"
        | "screening_question_answers,candidate,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers,candidate,job,credited_to,reject_reason"
        | "screening_question_answers,candidate,job,current_stage"
        | "screening_question_answers,candidate,job,current_stage,reject_reason"
        | "screening_question_answers,candidate,job,reject_reason"
        | "screening_question_answers,candidate,reject_reason"
        | "screening_question_answers,credited_to"
        | "screening_question_answers,credited_to,current_stage"
        | "screening_question_answers,credited_to,current_stage,reject_reason"
        | "screening_question_answers,credited_to,reject_reason"
        | "screening_question_answers,current_stage"
        | "screening_question_answers,current_stage,reject_reason"
        | "screening_question_answers,job"
        | "screening_question_answers,job,credited_to"
        | "screening_question_answers,job,credited_to,current_stage"
        | "screening_question_answers,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers,job,credited_to,reject_reason"
        | "screening_question_answers,job,current_stage"
        | "screening_question_answers,job,current_stage,reject_reason"
        | "screening_question_answers,job,reject_reason"
        | "screening_question_answers,reject_reason"
        | "screening_question_answers,screening_question_answers.question"
        | "screening_question_answers,screening_question_answers.question,candidate"
        | "screening_question_answers,screening_question_answers.question,candidate,credited_to"
        | "screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage"
        | "screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,current_stage"
        | "screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,job"
        | "screening_question_answers,screening_question_answers.question,candidate,job,credited_to"
        | "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage"
        | "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,job,current_stage"
        | "screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,job,reject_reason"
        | "screening_question_answers,screening_question_answers.question,candidate,reject_reason"
        | "screening_question_answers,screening_question_answers.question,credited_to"
        | "screening_question_answers,screening_question_answers.question,credited_to,current_stage"
        | "screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,credited_to,reject_reason"
        | "screening_question_answers,screening_question_answers.question,current_stage"
        | "screening_question_answers,screening_question_answers.question,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,job"
        | "screening_question_answers,screening_question_answers.question,job,credited_to"
        | "screening_question_answers,screening_question_answers.question,job,credited_to,current_stage"
        | "screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason"
        | "screening_question_answers,screening_question_answers.question,job,current_stage"
        | "screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason"
        | "screening_question_answers,screening_question_answers.question,job,reject_reason"
        | "screening_question_answers,screening_question_answers.question,reject_reason"
        | "screening_question_answers.question"
        | "screening_question_answers.question,candidate"
        | "screening_question_answers.question,candidate,credited_to"
        | "screening_question_answers.question,candidate,credited_to,current_stage"
        | "screening_question_answers.question,candidate,credited_to,current_stage,reject_reason"
        | "screening_question_answers.question,candidate,credited_to,reject_reason"
        | "screening_question_answers.question,candidate,current_stage"
        | "screening_question_answers.question,candidate,current_stage,reject_reason"
        | "screening_question_answers.question,candidate,job"
        | "screening_question_answers.question,candidate,job,credited_to"
        | "screening_question_answers.question,candidate,job,credited_to,current_stage"
        | "screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers.question,candidate,job,credited_to,reject_reason"
        | "screening_question_answers.question,candidate,job,current_stage"
        | "screening_question_answers.question,candidate,job,current_stage,reject_reason"
        | "screening_question_answers.question,candidate,job,reject_reason"
        | "screening_question_answers.question,candidate,reject_reason"
        | "screening_question_answers.question,credited_to"
        | "screening_question_answers.question,credited_to,current_stage"
        | "screening_question_answers.question,credited_to,current_stage,reject_reason"
        | "screening_question_answers.question,credited_to,reject_reason"
        | "screening_question_answers.question,current_stage"
        | "screening_question_answers.question,current_stage,reject_reason"
        | "screening_question_answers.question,job"
        | "screening_question_answers.question,job,credited_to"
        | "screening_question_answers.question,job,credited_to,current_stage"
        | "screening_question_answers.question,job,credited_to,current_stage,reject_reason"
        | "screening_question_answers.question,job,credited_to,reject_reason"
        | "screening_question_answers.question,job,current_stage"
        | "screening_question_answers.question,job,current_stage,reject_reason"
        | "screening_question_answers.question,job,reject_reason"
        | "screening_question_answers.question,reject_reason";
}
