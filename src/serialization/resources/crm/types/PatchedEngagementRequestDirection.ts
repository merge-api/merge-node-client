/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PatchedEngagementRequestDirection: core.serialization.Schema<
    serializers.crm.PatchedEngagementRequestDirection.Raw,
    Merge.crm.PatchedEngagementRequestDirection
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.DirectionEnum),
    core.serialization.string(),
]);

export declare namespace PatchedEngagementRequestDirection {
    type Raw = serializers.crm.DirectionEnum.Raw | string;
}
