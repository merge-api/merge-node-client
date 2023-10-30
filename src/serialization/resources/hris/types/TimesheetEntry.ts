/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimesheetEntry: core.serialization.ObjectSchema<
    serializers.hris.TimesheetEntry.Raw,
    Merge.hris.TimesheetEntry
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    employee: core.serialization.string().optional(),
    hoursWorked: core.serialization.property("hours_worked", core.serialization.number().optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace TimesheetEntry {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        employee?: string | null;
        hours_worked?: number | null;
        start_time?: string | null;
        end_time?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
    }
}
