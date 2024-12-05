/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AuditLogEvent } from "./AuditLogEvent";

export const PaginatedAuditLogEventList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedAuditLogEventList.Raw,
    Merge.ats.PaginatedAuditLogEventList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(AuditLogEvent).optional(),
});

export declare namespace PaginatedAuditLogEventList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: AuditLogEvent.Raw[] | null;
    }
}
