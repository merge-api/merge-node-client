/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ActivitiesRetrieveRequestRemoteFields: core.serialization.Schema<
    serializers.ats.ActivitiesRetrieveRequestRemoteFields.Raw,
    Merge.ats.ActivitiesRetrieveRequestRemoteFields
> = core.serialization.enum_(["activity_type", "activity_type,visibility", "visibility"]);

export declare namespace ActivitiesRetrieveRequestRemoteFields {
    type Raw = "activity_type" | "activity_type,visibility" | "visibility";
}
