/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EngagementType: core.serialization.ObjectSchema<
    serializers.crm.EngagementType.Raw,
    Merge.crm.EngagementType
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    activityType: core.serialization.property(
        "activity_type",
        core.serialization.lazy(async () => (await import("../../..")).crm.EngagementTypeActivityType).optional()
    ),
    name: core.serialization.string().optional(),
    remoteFields: core.serialization.property(
        "remote_fields",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteField))
            .optional()
    ),
});

export declare namespace EngagementType {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        activity_type?: serializers.crm.EngagementTypeActivityType.Raw | null;
        name?: string | null;
        remote_fields?: serializers.crm.RemoteField.Raw[] | null;
    }
}
