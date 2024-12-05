/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SyncStatus } from "../../../types/SyncStatus";

export const Response: core.serialization.Schema<
    serializers.crm.forceResync.syncStatusResyncCreate.Response.Raw,
    Merge.crm.SyncStatus[]
> = core.serialization.list(SyncStatus);

export declare namespace Response {
    type Raw = SyncStatus.Raw[];
}
