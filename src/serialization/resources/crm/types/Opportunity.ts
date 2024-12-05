/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { OpportunityOwner } from "./OpportunityOwner";
import { OpportunityAccount } from "./OpportunityAccount";
import { OpportunityStage } from "./OpportunityStage";
import { OpportunityStatus } from "./OpportunityStatus";
import { RemoteData } from "./RemoteData";
import { RemoteField } from "./RemoteField";

export const Opportunity: core.serialization.ObjectSchema<serializers.crm.Opportunity.Raw, Merge.crm.Opportunity> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        amount: core.serialization.number().optional(),
        owner: OpportunityOwner.optional(),
        account: OpportunityAccount.optional(),
        stage: OpportunityStage.optional(),
        status: OpportunityStatus.optional(),
        lastActivityAt: core.serialization.property("last_activity_at", core.serialization.date().optional()),
        closeDate: core.serialization.property("close_date", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
        remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteField).optional()),
    });

export declare namespace Opportunity {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        name?: string | null;
        description?: string | null;
        amount?: number | null;
        owner?: OpportunityOwner.Raw | null;
        account?: OpportunityAccount.Raw | null;
        stage?: OpportunityStage.Raw | null;
        status?: OpportunityStatus.Raw | null;
        last_activity_at?: string | null;
        close_date?: string | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
        remote_fields?: RemoteField.Raw[] | null;
    }
}
