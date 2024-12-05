/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { OpportunityRequestOwner } from "./OpportunityRequestOwner";
import { OpportunityRequestAccount } from "./OpportunityRequestAccount";
import { OpportunityRequestStage } from "./OpportunityRequestStage";
import { OpportunityRequestStatus } from "./OpportunityRequestStatus";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const OpportunityRequest: core.serialization.ObjectSchema<
    serializers.crm.OpportunityRequest.Raw,
    Merge.crm.OpportunityRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    owner: OpportunityRequestOwner.optional(),
    account: OpportunityRequestAccount.optional(),
    stage: OpportunityRequestStage.optional(),
    status: OpportunityRequestStatus.optional(),
    lastActivityAt: core.serialization.property("last_activity_at", core.serialization.date().optional()),
    closeDate: core.serialization.property("close_date", core.serialization.date().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteFieldRequest).optional()),
});

export declare namespace OpportunityRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        amount?: number | null;
        owner?: OpportunityRequestOwner.Raw | null;
        account?: OpportunityRequestAccount.Raw | null;
        stage?: OpportunityRequestStage.Raw | null;
        status?: OpportunityRequestStatus.Raw | null;
        last_activity_at?: string | null;
        close_date?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
