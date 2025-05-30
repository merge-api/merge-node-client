/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExternalTargetFieldApi } from "./ExternalTargetFieldApi";

export const ExternalTargetFieldApiResponse: core.serialization.ObjectSchema<
    serializers.ats.ExternalTargetFieldApiResponse.Raw,
    Merge.ats.ExternalTargetFieldApiResponse
> = core.serialization.object({
    activity: core.serialization.property("Activity", core.serialization.list(ExternalTargetFieldApi).optional()),
    application: core.serialization.property("Application", core.serialization.list(ExternalTargetFieldApi).optional()),
    attachment: core.serialization.property("Attachment", core.serialization.list(ExternalTargetFieldApi).optional()),
    candidate: core.serialization.property("Candidate", core.serialization.list(ExternalTargetFieldApi).optional()),
    department: core.serialization.property("Department", core.serialization.list(ExternalTargetFieldApi).optional()),
    eeoc: core.serialization.property("EEOC", core.serialization.list(ExternalTargetFieldApi).optional()),
    scheduledInterview: core.serialization.property(
        "ScheduledInterview",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    job: core.serialization.property("Job", core.serialization.list(ExternalTargetFieldApi).optional()),
    jobPosting: core.serialization.property("JobPosting", core.serialization.list(ExternalTargetFieldApi).optional()),
    jobInterviewStage: core.serialization.property(
        "JobInterviewStage",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    offer: core.serialization.property("Offer", core.serialization.list(ExternalTargetFieldApi).optional()),
    office: core.serialization.property("Office", core.serialization.list(ExternalTargetFieldApi).optional()),
    rejectReason: core.serialization.property(
        "RejectReason",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    scorecard: core.serialization.property("Scorecard", core.serialization.list(ExternalTargetFieldApi).optional()),
    tag: core.serialization.property("Tag", core.serialization.list(ExternalTargetFieldApi).optional()),
    remoteUser: core.serialization.property("RemoteUser", core.serialization.list(ExternalTargetFieldApi).optional()),
});

export declare namespace ExternalTargetFieldApiResponse {
    export interface Raw {
        Activity?: ExternalTargetFieldApi.Raw[] | null;
        Application?: ExternalTargetFieldApi.Raw[] | null;
        Attachment?: ExternalTargetFieldApi.Raw[] | null;
        Candidate?: ExternalTargetFieldApi.Raw[] | null;
        Department?: ExternalTargetFieldApi.Raw[] | null;
        EEOC?: ExternalTargetFieldApi.Raw[] | null;
        ScheduledInterview?: ExternalTargetFieldApi.Raw[] | null;
        Job?: ExternalTargetFieldApi.Raw[] | null;
        JobPosting?: ExternalTargetFieldApi.Raw[] | null;
        JobInterviewStage?: ExternalTargetFieldApi.Raw[] | null;
        Offer?: ExternalTargetFieldApi.Raw[] | null;
        Office?: ExternalTargetFieldApi.Raw[] | null;
        RejectReason?: ExternalTargetFieldApi.Raw[] | null;
        Scorecard?: ExternalTargetFieldApi.Raw[] | null;
        Tag?: ExternalTargetFieldApi.Raw[] | null;
        RemoteUser?: ExternalTargetFieldApi.Raw[] | null;
    }
}
