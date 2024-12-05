/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { FieldMappingApiInstance } from "./FieldMappingApiInstance";

export const FieldMappingApiInstanceResponse: core.serialization.ObjectSchema<
    serializers.crm.FieldMappingApiInstanceResponse.Raw,
    Merge.crm.FieldMappingApiInstanceResponse
> = core.serialization.object({
    account: core.serialization.property("Account", core.serialization.list(FieldMappingApiInstance).optional()),
    contact: core.serialization.property("Contact", core.serialization.list(FieldMappingApiInstance).optional()),
    lead: core.serialization.property("Lead", core.serialization.list(FieldMappingApiInstance).optional()),
    note: core.serialization.property("Note", core.serialization.list(FieldMappingApiInstance).optional()),
    opportunity: core.serialization.property(
        "Opportunity",
        core.serialization.list(FieldMappingApiInstance).optional()
    ),
    stage: core.serialization.property("Stage", core.serialization.list(FieldMappingApiInstance).optional()),
    user: core.serialization.property("User", core.serialization.list(FieldMappingApiInstance).optional()),
    task: core.serialization.property("Task", core.serialization.list(FieldMappingApiInstance).optional()),
    engagement: core.serialization.property("Engagement", core.serialization.list(FieldMappingApiInstance).optional()),
});

export declare namespace FieldMappingApiInstanceResponse {
    interface Raw {
        Account?: FieldMappingApiInstance.Raw[] | null;
        Contact?: FieldMappingApiInstance.Raw[] | null;
        Lead?: FieldMappingApiInstance.Raw[] | null;
        Note?: FieldMappingApiInstance.Raw[] | null;
        Opportunity?: FieldMappingApiInstance.Raw[] | null;
        Stage?: FieldMappingApiInstance.Raw[] | null;
        User?: FieldMappingApiInstance.Raw[] | null;
        Task?: FieldMappingApiInstance.Raw[] | null;
        Engagement?: FieldMappingApiInstance.Raw[] | null;
    }
}
