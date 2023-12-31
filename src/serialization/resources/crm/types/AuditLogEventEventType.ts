/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AuditLogEventEventType: core.serialization.Schema<
    serializers.crm.AuditLogEventEventType.Raw,
    Merge.crm.AuditLogEventEventType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.EventTypeEnum),
    core.serialization.string(),
]);

export declare namespace AuditLogEventEventType {
    type Raw = serializers.crm.EventTypeEnum.Raw | string;
}
