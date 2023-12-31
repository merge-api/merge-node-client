/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ActivityVisibility: core.serialization.Schema<
    serializers.ats.ActivityVisibility.Raw,
    Merge.ats.ActivityVisibility
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.VisibilityEnum),
    core.serialization.string(),
]);

export declare namespace ActivityVisibility {
    type Raw = serializers.ats.VisibilityEnum.Raw | string;
}
