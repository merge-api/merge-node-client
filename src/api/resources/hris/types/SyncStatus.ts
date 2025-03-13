/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The SyncStatus Object
 *
 * ### Description
 *
 * The `SyncStatus` object is used to represent the syncing state of an account
 *
 * ### Usage Example
 *
 * View the `SyncStatus` for an account to see how recently its models were synced.
 */
export interface SyncStatus {
    modelName: string;
    modelId: string;
    lastSyncStart?: Date;
    nextSyncStart?: Date;
    lastSyncResult?: Merge.hris.SyncStatusLastSyncResult;
    lastSyncFinished?: Date;
    status: Merge.hris.StatusFd5Enum;
    isInitialSync: boolean;
    selectiveSyncConfigurationsUsage?: Merge.hris.SelectiveSyncConfigurationsUsageEnum;
}
