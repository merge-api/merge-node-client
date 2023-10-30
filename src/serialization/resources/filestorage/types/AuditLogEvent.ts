/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AuditLogEvent: core.serialization.ObjectSchema<
    serializers.filestorage.AuditLogEvent.Raw,
    Merge.filestorage.AuditLogEvent
> = core.serialization.object({
    id: core.serialization.string().optional(),
    userName: core.serialization.property("user_name", core.serialization.string().optional()),
    userEmail: core.serialization.property("user_email", core.serialization.string().optional()),
    role: core.serialization.lazy(async () => (await import("../../..")).filestorage.AuditLogEventRole),
    ipAddress: core.serialization.property("ip_address", core.serialization.string()),
    eventType: core.serialization.property(
        "event_type",
        core.serialization.lazy(async () => (await import("../../..")).filestorage.AuditLogEventEventType)
    ),
    eventDescription: core.serialization.property("event_description", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
});

export declare namespace AuditLogEvent {
    interface Raw {
        id?: string | null;
        user_name?: string | null;
        user_email?: string | null;
        role: serializers.filestorage.AuditLogEventRole.Raw;
        ip_address: string;
        event_type: serializers.filestorage.AuditLogEventEventType.Raw;
        event_description: string;
        created_at?: string | null;
    }
}
