/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Engagement Type Object
 * ### Description
 * The `Engagement Type` object is used to represent an interaction activity. A given `Engagement` typically has an `Engagement Type` object represented in the engagement_type field.
 * ### Usage Example
 * TODO
 */
export interface EngagementType {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /**
     * The engagement type's activity type.
     *
     * * `CALL` - CALL
     * * `MEETING` - MEETING
     * * `EMAIL` - EMAIL
     */
    activityType?: Merge.crm.EngagementTypeActivityType;
    /** The engagement type's name. */
    name?: string;
    remoteFields?: Merge.crm.RemoteField[];
}
