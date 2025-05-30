/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PatchedEngagementRequestDirection } from "./PatchedEngagementRequestDirection";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const PatchedEngagementRequest: core.serialization.ObjectSchema<
    serializers.crm.PatchedEngagementRequest.Raw,
    Merge.crm.PatchedEngagementRequest
> = core.serialization.object({
    owner: core.serialization.string().optional(),
    content: core.serialization.string().optional(),
    subject: core.serialization.string().optional(),
    direction: PatchedEngagementRequestDirection.optional(),
    engagementType: core.serialization.property("engagement_type", core.serialization.string().optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    account: core.serialization.string().optional(),
    contacts: core.serialization.list(core.serialization.string().optional()).optional(),
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

export declare namespace PatchedEngagementRequest {
    export interface Raw {
        owner?: string | null;
        content?: string | null;
        subject?: string | null;
        direction?: PatchedEngagementRequestDirection.Raw | null;
        engagement_type?: string | null;
        start_time?: string | null;
        end_time?: string | null;
        account?: string | null;
        contacts?: (string | null | undefined)[] | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
