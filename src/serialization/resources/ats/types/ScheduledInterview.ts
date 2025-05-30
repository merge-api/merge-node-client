/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ScheduledInterviewApplication } from "./ScheduledInterviewApplication";
import { ScheduledInterviewJobInterviewStage } from "./ScheduledInterviewJobInterviewStage";
import { ScheduledInterviewOrganizer } from "./ScheduledInterviewOrganizer";
import { ScheduledInterviewInterviewersItem } from "./ScheduledInterviewInterviewersItem";
import { ScheduledInterviewStatus } from "./ScheduledInterviewStatus";
import { RemoteData } from "./RemoteData";

export const ScheduledInterview: core.serialization.ObjectSchema<
    serializers.ats.ScheduledInterview.Raw,
    Merge.ats.ScheduledInterview
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    application: ScheduledInterviewApplication.optional(),
    jobInterviewStage: core.serialization.property(
        "job_interview_stage",
        ScheduledInterviewJobInterviewStage.optional(),
    ),
    organizer: ScheduledInterviewOrganizer.optional(),
    interviewers: core.serialization.list(ScheduledInterviewInterviewersItem.optional()).optional(),
    location: core.serialization.string().optional(),
    startAt: core.serialization.property("start_at", core.serialization.date().optional()),
    endAt: core.serialization.property("end_at", core.serialization.date().optional()),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    status: ScheduledInterviewStatus.optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
});

export declare namespace ScheduledInterview {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        application?: ScheduledInterviewApplication.Raw | null;
        job_interview_stage?: ScheduledInterviewJobInterviewStage.Raw | null;
        organizer?: ScheduledInterviewOrganizer.Raw | null;
        interviewers?: (ScheduledInterviewInterviewersItem.Raw | null | undefined)[] | null;
        location?: string | null;
        start_at?: string | null;
        end_at?: string | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        status?: ScheduledInterviewStatus.Raw | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
