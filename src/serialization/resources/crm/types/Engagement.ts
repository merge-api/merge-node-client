/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EngagementOwner } from "./EngagementOwner";
import { EngagementDirection } from "./EngagementDirection";
import { EngagementEngagementType } from "./EngagementEngagementType";
import { EngagementAccount } from "./EngagementAccount";
import { EngagementContactsItem } from "./EngagementContactsItem";
import { RemoteData } from "./RemoteData";
import { RemoteField } from "./RemoteField";

export const Engagement: core.serialization.ObjectSchema<serializers.crm.Engagement.Raw, Merge.crm.Engagement> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        owner: EngagementOwner.optional(),
        content: core.serialization.string().optional(),
        subject: core.serialization.string().optional(),
        direction: EngagementDirection.optional(),
        engagementType: core.serialization.property("engagement_type", EngagementEngagementType.optional()),
        startTime: core.serialization.property("start_time", core.serialization.date().optional()),
        endTime: core.serialization.property("end_time", core.serialization.date().optional()),
        account: EngagementAccount.optional(),
        contacts: core.serialization.list(EngagementContactsItem.optional()).optional(),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
        remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteField).optional()),
    });

export declare namespace Engagement {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        owner?: EngagementOwner.Raw | null;
        content?: string | null;
        subject?: string | null;
        direction?: EngagementDirection.Raw | null;
        engagement_type?: EngagementEngagementType.Raw | null;
        start_time?: string | null;
        end_time?: string | null;
        account?: EngagementAccount.Raw | null;
        contacts?: (EngagementContactsItem.Raw | null | undefined)[] | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
        remote_fields?: RemoteField.Raw[] | null;
    }
}
