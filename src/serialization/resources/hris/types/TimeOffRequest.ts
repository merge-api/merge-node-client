/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOffRequest: core.serialization.ObjectSchema<
    serializers.hris.TimeOffRequest.Raw,
    Merge.hris.TimeOffRequest
> = core.serialization.object({
    employee: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestEmployee).optional(),
    approver: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestApprover).optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestStatus).optional(),
    employeeNote: core.serialization.property("employee_note", core.serialization.string().optional()),
    units: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestUnits).optional(),
    amount: core.serialization.number().optional(),
    requestType: core.serialization.property(
        "request_type",
        core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestRequestType).optional()
    ),
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

export declare namespace TimeOffRequest {
    interface Raw {
        employee?: serializers.hris.TimeOffRequestEmployee.Raw | null;
        approver?: serializers.hris.TimeOffRequestApprover.Raw | null;
        status?: serializers.hris.TimeOffRequestStatus.Raw | null;
        employee_note?: string | null;
        units?: serializers.hris.TimeOffRequestUnits.Raw | null;
        amount?: number | null;
        request_type?: serializers.hris.TimeOffRequestRequestType.Raw | null;
        start_time?: string | null;
        end_time?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
