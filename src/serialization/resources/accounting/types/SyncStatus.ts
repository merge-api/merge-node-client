/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { LastSyncResultEnum } from "./LastSyncResultEnum";
import { StatusFd5Enum } from "./StatusFd5Enum";
import { SelectiveSyncConfigurationsUsageEnum } from "./SelectiveSyncConfigurationsUsageEnum";

export const SyncStatus: core.serialization.ObjectSchema<
    serializers.accounting.SyncStatus.Raw,
    Merge.accounting.SyncStatus
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    modelId: core.serialization.property("model_id", core.serialization.string()),
    lastSyncStart: core.serialization.property("last_sync_start", core.serialization.date().optional()),
    nextSyncStart: core.serialization.property("next_sync_start", core.serialization.date().optional()),
    lastSyncResult: core.serialization.property("last_sync_result", LastSyncResultEnum.optional()),
    lastSyncFinished: core.serialization.property("last_sync_finished", core.serialization.date().optional()),
    status: StatusFd5Enum,
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
        last_sync_result?: LastSyncResultEnum.Raw | null;
        last_sync_finished?: string | null;
        status: StatusFd5Enum.Raw;
        is_initial_sync: boolean;
        selective_sync_configurations_usage?: SelectiveSyncConfigurationsUsageEnum.Raw | null;
    }
}
