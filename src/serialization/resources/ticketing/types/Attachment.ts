/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Attachment: core.serialization.ObjectSchema<
    serializers.ticketing.Attachment.Raw,
    Merge.ticketing.Attachment
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fileName: core.serialization.property("file_name", core.serialization.string().optional()),
    ticket: core.serialization.lazy(async () => (await import("../../..")).ticketing.AttachmentTicket).optional(),
    fileUrl: core.serialization.property("file_url", core.serialization.string().optional()),
    contentType: core.serialization.property("content_type", core.serialization.string().optional()),
    uploadedBy: core.serialization.property("uploaded_by", core.serialization.string().optional()),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.RemoteData))
            .optional()
    ),
});

export declare namespace Attachment {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        file_name?: string | null;
        ticket?: serializers.ticketing.AttachmentTicket.Raw | null;
        file_url?: string | null;
        content_type?: string | null;
        uploaded_by?: string | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.ticketing.RemoteData.Raw[] | null;
    }
}
