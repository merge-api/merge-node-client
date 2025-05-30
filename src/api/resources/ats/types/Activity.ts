/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Activity Object
 * ### Description
 * The `Activity` object is used to represent an activity for a candidate performed by a user.
 * ### Usage Example
 * Fetch from the `LIST Activities` endpoint and filter by `ID` to show all activities.
 */
export interface Activity {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The user that performed the action. */
    user?: Merge.ats.ActivityUser;
    /** When the third party's activity was created. */
    remoteCreatedAt?: Date;
    /**
     * The activity's type.
     *
     * * `NOTE` - NOTE
     * * `EMAIL` - EMAIL
     * * `OTHER` - OTHER
     */
    activityType?: Merge.ats.ActivityActivityType;
    /** The activity's subject. */
    subject?: string;
    /** The activity's body. */
    body?: string;
    /**
     * The activity's visibility.
     *
     * * `ADMIN_ONLY` - ADMIN_ONLY
     * * `PUBLIC` - PUBLIC
     * * `PRIVATE` - PRIVATE
     */
    visibility?: Merge.ats.ActivityVisibility;
    candidate?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
