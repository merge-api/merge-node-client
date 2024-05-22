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
export interface ScheduledInterview {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The application being interviewed. */
    application?: Merge.ats.ScheduledInterviewApplication;
    /** The stage of the interview. */
    jobInterviewStage?: Merge.ats.ScheduledInterviewJobInterviewStage;
    /** The user organizing the interview. */
    organizer?: Merge.ats.ScheduledInterviewOrganizer;
    /** Array of `RemoteUser` IDs. */
    interviewers?: (Merge.ats.ScheduledInterviewInterviewersItem | undefined)[];
    /** The interview's location. */
    location?: string;
    /** When the interview was started. */
    startAt?: Date;
    /** When the interview was ended. */
    endAt?: Date;
    /** When the third party's interview was created. */
    remoteCreatedAt?: Date;
    /** When the third party's interview was updated. */
    remoteUpdatedAt?: Date;
    /**
     * The interview's status.
     *
     * - `SCHEDULED` - SCHEDULED
     * - `AWAITING_FEEDBACK` - AWAITING_FEEDBACK
     * - `COMPLETE` - COMPLETE
     */
    status?: Merge.ats.ScheduledInterviewStatus;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
