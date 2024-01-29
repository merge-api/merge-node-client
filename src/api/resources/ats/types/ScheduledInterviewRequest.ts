/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The ScheduledInterview Object
 *
 * ### Description
 *
 * The `ScheduledInterview` object is used to represent a scheduled interview for a given candidate’s application to a job. An `Application` can have multiple `ScheduledInterview`s depending on the particular hiring process.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations.
 */
export interface ScheduledInterviewRequest {
    /** The application being interviewed. */
    application?: Merge.ats.ScheduledInterviewRequestApplication;
    /** The stage of the interview. */
    jobInterviewStage?: Merge.ats.ScheduledInterviewRequestJobInterviewStage;
    /** The user organizing the interview. */
    organizer?: Merge.ats.ScheduledInterviewRequestOrganizer;
    /** Array of `RemoteUser` IDs. */
    interviewers?: (Merge.ats.ScheduledInterviewRequestInterviewersItem | undefined)[];
    /** The interview's location. */
    location?: string;
    /** When the interview was started. */
    startAt?: Date;
    /** When the interview was ended. */
    endAt?: Date;
    /**
     * The interview's status.
     *
     * - `SCHEDULED` - SCHEDULED
     * - `AWAITING_FEEDBACK` - AWAITING_FEEDBACK
     * - `COMPLETE` - COMPLETE
     */
    status?: Merge.ats.ScheduledInterviewRequestStatus;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
