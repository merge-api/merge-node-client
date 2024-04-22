/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOff: core.serialization.ObjectSchema<serializers.hris.TimeOff.Raw, Merge.hris.TimeOff> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        employee: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffEmployee).optional(),
        approver: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffApprover).optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffStatus).optional(),
        employeeNote: core.serialization.property("employee_note", core.serialization.string().optional()),
        units: core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffUnits).optional(),
        amount: core.serialization.number().optional(),
        requestType: core.serialization.property(
            "request_type",
            core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffRequestType).optional()
        ),
        startTime: core.serialization.property("start_time", core.serialization.date().optional()),
        endTime: core.serialization.property("end_time", core.serialization.date().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
                .optional()
        ),
    });

export declare namespace TimeOff {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        employee?: serializers.hris.TimeOffEmployee.Raw | null;
        approver?: serializers.hris.TimeOffApprover.Raw | null;
        status?: serializers.hris.TimeOffStatus.Raw | null;
        employee_note?: string | null;
        units?: serializers.hris.TimeOffUnits.Raw | null;
        amount?: number | null;
        request_type?: serializers.hris.TimeOffRequestType.Raw | null;
        start_time?: string | null;
        end_time?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
