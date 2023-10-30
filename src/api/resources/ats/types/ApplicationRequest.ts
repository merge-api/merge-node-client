/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Application Object
 * ### Description
 * The Application Object is used to represent a candidate's journey through a particular Job's recruiting process. If a Candidate applies for multiple Jobs, there will be a separate Application for each Job if the third-party integration allows it.
 *
 * ### Usage Example
 * Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications.
 */
export interface ApplicationRequest {
    /** The candidate applying. */
    candidate?: Merge.ats.ApplicationRequestCandidate;
    /** The job being applied for. */
    job?: Merge.ats.ApplicationRequestJob;
    /** When the application was submitted. */
    appliedAt?: Date;
    /** When the application was rejected. */
    rejectedAt?: Date;
    /** The application's source. */
    source?: string;
    /** The user credited for this application. */
    creditedTo?: Merge.ats.ApplicationRequestCreditedTo;
    /** The application's current stage. */
    currentStage?: Merge.ats.ApplicationRequestCurrentStage;
    /** The application's reason for rejection. */
    rejectReason?: Merge.ats.ApplicationRequestRejectReason;
    remoteTemplateId?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
