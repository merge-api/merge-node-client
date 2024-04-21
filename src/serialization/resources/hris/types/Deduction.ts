/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Deduction: core.serialization.ObjectSchema<serializers.hris.Deduction.Raw, Merge.hris.Deduction> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        employeePayrollRun: core.serialization.property("employee_payroll_run", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        employeeDeduction: core.serialization.property("employee_deduction", core.serialization.number().optional()),
        companyDeduction: core.serialization.property("company_deduction", core.serialization.number().optional()),
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

export declare namespace Deduction {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        employee_payroll_run?: string | null;
        name?: string | null;
        employee_deduction?: number | null;
        company_deduction?: number | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
