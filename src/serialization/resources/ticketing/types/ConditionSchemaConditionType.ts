/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ConditionSchemaConditionType: core.serialization.Schema<
    serializers.ticketing.ConditionSchemaConditionType.Raw,
    Merge.ticketing.ConditionSchemaConditionType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ticketing.ConditionTypeEnum),
    core.serialization.string(),
]);

export declare namespace ConditionSchemaConditionType {
    type Raw = serializers.ticketing.ConditionTypeEnum.Raw | string;
}
