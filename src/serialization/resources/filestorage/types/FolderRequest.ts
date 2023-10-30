/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FolderRequest: core.serialization.ObjectSchema<
    serializers.filestorage.FolderRequest.Raw,
    Merge.filestorage.FolderRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    folderUrl: core.serialization.property("folder_url", core.serialization.string().optional()),
    size: core.serialization.number().optional(),
    description: core.serialization.string().optional(),
    parentFolder: core.serialization.property(
        "parent_folder",
        core.serialization.lazy(async () => (await import("../../..")).filestorage.FolderRequestParentFolder).optional()
    ),
    drive: core.serialization.lazy(async () => (await import("../../..")).filestorage.FolderRequestDrive).optional(),
    permissions: core.serialization
        .lazy(async () => (await import("../../..")).filestorage.FolderRequestPermissions)
        .optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace FolderRequest {
    interface Raw {
        name?: string | null;
        folder_url?: string | null;
        size?: number | null;
        description?: string | null;
        parent_folder?: serializers.filestorage.FolderRequestParentFolder.Raw | null;
        drive?: serializers.filestorage.FolderRequestDrive.Raw | null;
        permissions?: serializers.filestorage.FolderRequestPermissions.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
