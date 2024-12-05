/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AttachmentRequestAttachmentType } from "./AttachmentRequestAttachmentType";

export const AttachmentRequest: core.serialization.ObjectSchema<
    serializers.ats.AttachmentRequest.Raw,
    Merge.ats.AttachmentRequest
> = core.serialization.object({
    fileName: core.serialization.property("file_name", core.serialization.string().optional()),
    fileUrl: core.serialization.property("file_url", core.serialization.string().optional()),
    candidate: core.serialization.string().optional(),
    attachmentType: core.serialization.property("attachment_type", AttachmentRequestAttachmentType.optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AttachmentRequest {
    interface Raw {
        file_name?: string | null;
        file_url?: string | null;
        candidate?: string | null;
        attachment_type?: AttachmentRequestAttachmentType.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
