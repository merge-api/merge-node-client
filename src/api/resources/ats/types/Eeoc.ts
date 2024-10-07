/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The EEOC Object
 *
 * ### Description
 *
 * The `EEOC` object is used to represent the Equal Employment Opportunity Commission information for a candidate (race, gender, veteran status, disability status).
 *
 * ### Usage Example
 *
 * Fetch from the `LIST EEOCs` endpoint and filter by `candidate` to show all EEOC information for a candidate.
 */
export interface Eeoc {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The candidate being represented. */
    candidate?: Merge.ats.EeocCandidate;
    /** When the information was submitted. */
    submittedAt?: Date;
    /**
     * The candidate's race.
     *
     * - `AMERICAN_INDIAN_OR_ALASKAN_NATIVE` - AMERICAN_INDIAN_OR_ALASKAN_NATIVE
     * - `ASIAN` - ASIAN
     * - `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     * - `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     * - `WHITE` - WHITE
     * - `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     * - `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     * - `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
     */
    race?: Merge.ats.EeocRace;
    /**
     * The candidate's gender.
     *
     * - `MALE` - MALE
     * - `FEMALE` - FEMALE
     * - `NON-BINARY` - NON-BINARY
     * - `OTHER` - OTHER
     * - `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
     */
    gender?: Merge.ats.EeocGender;
    /**
     * The candidate's veteran status.
     *
     * - `I_AM_NOT_A_PROTECTED_VETERAN` - I_AM_NOT_A_PROTECTED_VETERAN
     * - `I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN` - I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN
     * - `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
     */
    veteranStatus?: Merge.ats.EeocVeteranStatus;
    /**
     * The candidate's disability status.
     *
     * - `YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY` - YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY
     * - `NO_I_DONT_HAVE_A_DISABILITY` - NO_I_DONT_HAVE_A_DISABILITY
     * - `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
     */
    disabilityStatus?: Merge.ats.EeocDisabilityStatus;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
