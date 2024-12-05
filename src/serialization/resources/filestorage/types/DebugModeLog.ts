/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { DebugModelLogSummary } from "./DebugModelLogSummary";

export const DebugModeLog: core.serialization.ObjectSchema<
    serializers.filestorage.DebugModeLog.Raw,
    Merge.filestorage.DebugModeLog
> = core.serialization.object({
    logId: core.serialization.property("log_id", core.serialization.string()),
    dashboardView: core.serialization.property("dashboard_view", core.serialization.string()),
    logSummary: core.serialization.property("log_summary", DebugModelLogSummary),
});

export declare namespace DebugModeLog {
    interface Raw {
        log_id: string;
        dashboard_view: string;
        log_summary: DebugModelLogSummary.Raw;
    }
}
