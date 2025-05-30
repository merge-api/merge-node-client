/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExternalTargetFieldApi } from "./ExternalTargetFieldApi";

export const ExternalTargetFieldApiResponse: core.serialization.ObjectSchema<
    serializers.crm.ExternalTargetFieldApiResponse.Raw,
    Merge.crm.ExternalTargetFieldApiResponse
> = core.serialization.object({
    account: core.serialization.property("Account", core.serialization.list(ExternalTargetFieldApi).optional()),
    contact: core.serialization.property("Contact", core.serialization.list(ExternalTargetFieldApi).optional()),
    lead: core.serialization.property("Lead", core.serialization.list(ExternalTargetFieldApi).optional()),
    note: core.serialization.property("Note", core.serialization.list(ExternalTargetFieldApi).optional()),
    opportunity: core.serialization.property("Opportunity", core.serialization.list(ExternalTargetFieldApi).optional()),
    stage: core.serialization.property("Stage", core.serialization.list(ExternalTargetFieldApi).optional()),
    user: core.serialization.property("User", core.serialization.list(ExternalTargetFieldApi).optional()),
    task: core.serialization.property("Task", core.serialization.list(ExternalTargetFieldApi).optional()),
    engagement: core.serialization.property("Engagement", core.serialization.list(ExternalTargetFieldApi).optional()),
});

export declare namespace ExternalTargetFieldApiResponse {
    export interface Raw {
        Account?: ExternalTargetFieldApi.Raw[] | null;
        Contact?: ExternalTargetFieldApi.Raw[] | null;
        Lead?: ExternalTargetFieldApi.Raw[] | null;
        Note?: ExternalTargetFieldApi.Raw[] | null;
        Opportunity?: ExternalTargetFieldApi.Raw[] | null;
        Stage?: ExternalTargetFieldApi.Raw[] | null;
        User?: ExternalTargetFieldApi.Raw[] | null;
        Task?: ExternalTargetFieldApi.Raw[] | null;
        Engagement?: ExternalTargetFieldApi.Raw[] | null;
    }
}
