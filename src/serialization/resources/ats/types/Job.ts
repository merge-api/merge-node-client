/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Job: core.serialization.ObjectSchema<serializers.ats.Job.Raw, Merge.ats.Job> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).ats.JobStatus).optional(),
    jobPostingUrls: core.serialization.property(
        "job_posting_urls",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.Url))
            .optional()
    ),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    confidential: core.serialization.boolean().optional(),
    departments: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ats.JobDepartmentsItem).optional())
        .optional(),
    offices: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ats.JobOfficesItem).optional())
        .optional(),
    hiringManagers: core.serialization.property(
        "hiring_managers",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).ats.JobHiringManagersItem).optional())
            .optional()
    ),
    recruiters: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ats.JobRecruitersItem).optional())
        .optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteData))
            .optional()
    ),
});

export declare namespace Job {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        description?: string | null;
        code?: string | null;
        status?: serializers.ats.JobStatus.Raw | null;
        job_posting_urls?: serializers.ats.Url.Raw[] | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        confidential?: boolean | null;
        departments?: (serializers.ats.JobDepartmentsItem.Raw | null | undefined)[] | null;
        offices?: (serializers.ats.JobOfficesItem.Raw | null | undefined)[] | null;
        hiring_managers?: (serializers.ats.JobHiringManagersItem.Raw | null | undefined)[] | null;
        recruiters?: (serializers.ats.JobRecruitersItem.Raw | null | undefined)[] | null;
        remote_was_deleted?: boolean | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.ats.RemoteData.Raw[] | null;
    }
}
