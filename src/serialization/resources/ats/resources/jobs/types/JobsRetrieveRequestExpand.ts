/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const JobsRetrieveRequestExpand: core.serialization.Schema<
    serializers.ats.JobsRetrieveRequestExpand.Raw,
    Merge.ats.JobsRetrieveRequestExpand
> = core.serialization.enum_([
    "departments",
    "departments,hiring_managers",
    "departments,hiring_managers,job_postings",
    "departments,hiring_managers,job_postings,recruiters",
    "departments,hiring_managers,recruiters",
    "departments,job_postings",
    "departments,job_postings,recruiters",
    "departments,offices",
    "departments,offices,hiring_managers",
    "departments,offices,hiring_managers,job_postings",
    "departments,offices,hiring_managers,job_postings,recruiters",
    "departments,offices,hiring_managers,recruiters",
    "departments,offices,job_postings",
    "departments,offices,job_postings,recruiters",
    "departments,offices,recruiters",
    "departments,recruiters",
    "hiring_managers",
    "hiring_managers,job_postings",
    "hiring_managers,job_postings,recruiters",
    "hiring_managers,recruiters",
    "job_postings",
    "job_postings,recruiters",
    "offices",
    "offices,hiring_managers",
    "offices,hiring_managers,job_postings",
    "offices,hiring_managers,job_postings,recruiters",
    "offices,hiring_managers,recruiters",
    "offices,job_postings",
    "offices,job_postings,recruiters",
    "offices,recruiters",
    "recruiters",
]);

export declare namespace JobsRetrieveRequestExpand {
    type Raw =
        | "departments"
        | "departments,hiring_managers"
        | "departments,hiring_managers,job_postings"
        | "departments,hiring_managers,job_postings,recruiters"
        | "departments,hiring_managers,recruiters"
        | "departments,job_postings"
        | "departments,job_postings,recruiters"
        | "departments,offices"
        | "departments,offices,hiring_managers"
        | "departments,offices,hiring_managers,job_postings"
        | "departments,offices,hiring_managers,job_postings,recruiters"
        | "departments,offices,hiring_managers,recruiters"
        | "departments,offices,job_postings"
        | "departments,offices,job_postings,recruiters"
        | "departments,offices,recruiters"
        | "departments,recruiters"
        | "hiring_managers"
        | "hiring_managers,job_postings"
        | "hiring_managers,job_postings,recruiters"
        | "hiring_managers,recruiters"
        | "job_postings"
        | "job_postings,recruiters"
        | "offices"
        | "offices,hiring_managers"
        | "offices,hiring_managers,job_postings"
        | "offices,hiring_managers,job_postings,recruiters"
        | "offices,hiring_managers,recruiters"
        | "offices,job_postings"
        | "offices,job_postings,recruiters"
        | "offices,recruiters"
        | "recruiters";
}
