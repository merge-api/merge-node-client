/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { SyncStatusStatusEnum } from "./SyncStatusStatusEnum";
import { SelectiveSyncConfigurationsUsageEnum } from "./SelectiveSyncConfigurationsUsageEnum";

export const SyncStatus: core.serialization.ObjectSchema<serializers.hris.SyncStatus.Raw, Merge.hris.SyncStatus> =
    core.serialization.object({
        modelName: core.serialization.property("model_name", core.serialization.string()),
        modelId: core.serialization.property("model_id", core.serialization.string()),
        lastSyncStart: core.serialization.property("last_sync_start", core.serialization.date().optional()),
        nextSyncStart: core.serialization.property("next_sync_start", core.serialization.date().optional()),
        status: SyncStatusStatusEnum,
        isInitialSync: core.serialization.property("is_initial_sync", core.serialization.boolean()),
        selectiveSyncConfigurationsUsage: core.serialization.property(
            "selective_sync_configurations_usage",
            SelectiveSyncConfigurationsUsageEnum.optional()
        ),
    });

export declare namespace SyncStatus {
    interface Raw {
        model_name: string;
        model_id: string;
        last_sync_start?: string | null;
        next_sync_start?: string | null;
        status: SyncStatusStatusEnum.Raw;
        is_initial_sync: boolean;
        selective_sync_configurations_usage?: SelectiveSyncConfigurationsUsageEnum.Raw | null;
    }
}
