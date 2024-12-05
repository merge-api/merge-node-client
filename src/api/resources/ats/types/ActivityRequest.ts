/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

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
export interface ActivityRequest {
    /** The user that performed the action. */
    user?: Merge.ats.ActivityRequestUser;
    /**
     * The activity's type.
     *
     * - `NOTE` - NOTE
     * - `EMAIL` - EMAIL
     * - `OTHER` - OTHER
     */
    activityType?: Merge.ats.ActivityRequestActivityType;
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
    visibility?: Merge.ats.ActivityRequestVisibility;
    candidate?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
