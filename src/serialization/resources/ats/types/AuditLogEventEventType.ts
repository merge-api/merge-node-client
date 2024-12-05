/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EventTypeEnum } from "./EventTypeEnum";

export const AuditLogEventEventType: core.serialization.Schema<
    serializers.ats.AuditLogEventEventType.Raw,
    Merge.ats.AuditLogEventEventType
> = core.serialization.undiscriminatedUnion([EventTypeEnum, core.serialization.string()]);

export declare namespace AuditLogEventEventType {
    type Raw = EventTypeEnum.Raw | string;
}
