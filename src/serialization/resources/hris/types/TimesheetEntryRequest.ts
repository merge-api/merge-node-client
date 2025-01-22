/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TimesheetEntryRequestEmployee } from "./TimesheetEntryRequestEmployee";

export const TimesheetEntryRequest: core.serialization.ObjectSchema<
    serializers.hris.TimesheetEntryRequest.Raw,
    Merge.hris.TimesheetEntryRequest
> = core.serialization.object({
    employee: TimesheetEntryRequestEmployee.optional(),
    hoursWorked: core.serialization.property("hours_worked", core.serialization.number().optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace TimesheetEntryRequest {
    interface Raw {
        employee?: TimesheetEntryRequestEmployee.Raw | null;
        hours_worked?: number | null;
        start_time?: string | null;
        end_time?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
