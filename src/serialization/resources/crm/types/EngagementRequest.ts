/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EngagementRequestOwner } from "./EngagementRequestOwner";
import { EngagementRequestDirection } from "./EngagementRequestDirection";
import { EngagementRequestEngagementType } from "./EngagementRequestEngagementType";
import { EngagementRequestAccount } from "./EngagementRequestAccount";
import { EngagementRequestContactsItem } from "./EngagementRequestContactsItem";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const EngagementRequest: core.serialization.ObjectSchema<
    serializers.crm.EngagementRequest.Raw,
    Merge.crm.EngagementRequest
> = core.serialization.object({
    owner: EngagementRequestOwner.optional(),
    content: core.serialization.string().optional(),
    subject: core.serialization.string().optional(),
    direction: EngagementRequestDirection.optional(),
    engagementType: core.serialization.property("engagement_type", EngagementRequestEngagementType.optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    account: EngagementRequestAccount.optional(),
    contacts: core.serialization.list(EngagementRequestContactsItem.optional()).optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteFieldRequest).optional()),
});

export declare namespace EngagementRequest {
    export interface Raw {
        owner?: EngagementRequestOwner.Raw | null;
        content?: string | null;
        subject?: string | null;
        direction?: EngagementRequestDirection.Raw | null;
        engagement_type?: EngagementRequestEngagementType.Raw | null;
        start_time?: string | null;
        end_time?: string | null;
        account?: EngagementRequestAccount.Raw | null;
        contacts?: (EngagementRequestContactsItem.Raw | null | undefined)[] | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
