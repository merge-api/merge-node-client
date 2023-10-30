/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The JobInterviewStage Object
 * ### Description
 * The `JobInterviewStage` object is used to represent a particular recruiting stage for an `Application`. A given `Application` typically has the `JobInterviewStage` object represented in the current_stage field.
 * ### Usage Example
 * Fetch from the `LIST JobInterviewStages` endpoint and view the job interview stages used by a company.
 */
export interface JobInterviewStage {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** Standard stage names are offered by ATS systems but can be modified by users. */
    name?: string;
    /** This field is populated only if the stage is specific to a particular job. If the stage is generic, this field will not be populated. */
    job?: Merge.ats.JobInterviewStageJob;
    /** The stage’s order, with the lowest values ordered first. If the third-party does not return details on the order of stages, this field will not be populated. */
    stageOrder?: number;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
