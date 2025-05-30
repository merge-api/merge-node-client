/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The ScreeningQuestion Object
 * ### Description
 * The `ScreeningQuestion` object is used to represent questions asked to screen candidates for a job.
 *
 * ### Usage Example
 * TODO
 */
export interface ScreeningQuestion {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The job associated with the screening question. */
    job?: Merge.ats.ScreeningQuestionJob;
    /** The description of the screening question */
    description?: string;
    /** The title of the screening question */
    title?: string;
    /**
     * The data type for the screening question.
     *
     * * `DATE` - DATE
     * * `FILE` - FILE
     * * `SINGLE_SELECT` - SINGLE_SELECT
     * * `MULTI_SELECT` - MULTI_SELECT
     * * `SINGLE_LINE_TEXT` - SINGLE_LINE_TEXT
     * * `MULTI_LINE_TEXT` - MULTI_LINE_TEXT
     * * `NUMERIC` - NUMERIC
     * * `BOOLEAN` - BOOLEAN
     */
    type?: Merge.ats.ScreeningQuestionType;
    /** Whether or not the screening question is required. */
    required?: boolean;
    options?: unknown[];
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
}
