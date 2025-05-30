/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TimesheetEntryEmployee } from "./TimesheetEntryEmployee";
import { RemoteData } from "./RemoteData";

export const TimesheetEntry: core.serialization.ObjectSchema<
    serializers.hris.TimesheetEntry.Raw,
    Merge.hris.TimesheetEntry
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    employee: TimesheetEntryEmployee.optional(),
    hoursWorked: core.serialization.property("hours_worked", core.serialization.number().optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
});

export declare namespace TimesheetEntry {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        employee?: TimesheetEntryEmployee.Raw | null;
        hours_worked?: number | null;
        start_time?: string | null;
        end_time?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
