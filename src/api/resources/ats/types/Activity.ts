/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Activity Object
 *
 * ### Description
 *
 * The `Activity` object is used to represent an activity for a candidate performed by a user.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST Activities` endpoint and filter by `ID` to show all activities.
 */
export interface Activity {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The user that performed the action. */
    user?: Merge.ats.ActivityUser;
    /** When the third party's activity was created. */
    remoteCreatedAt?: Date;
    /**
     * The activity's type.
     *
     * - `NOTE` - NOTE
     * - `EMAIL` - EMAIL
     * - `OTHER` - OTHER
     */
    activityType?: Merge.ats.ActivityActivityType;
    /** The activity's subject. */
    subject?: string;
    /** The activity's body. */
    body?: string;
    /**
     * The activity's visibility.
     *
     * - `ADMIN_ONLY` - ADMIN_ONLY
     * - `PUBLIC` - PUBLIC
     * - `PRIVATE` - PRIVATE
     */
    visibility?: Merge.ats.ActivityVisibility;
    /** The activity’s candidate. */
    candidate?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
