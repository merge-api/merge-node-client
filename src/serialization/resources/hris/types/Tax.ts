/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteData } from "./RemoteData";

export const Tax: core.serialization.ObjectSchema<serializers.hris.Tax.Raw, Merge.hris.Tax> = core.serialization.object(
    {
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        employeePayrollRun: core.serialization.property("employee_payroll_run", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        amount: core.serialization.number().optional(),
        employerTax: core.serialization.property("employer_tax", core.serialization.boolean().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
    }
);

export declare namespace Tax {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        employee_payroll_run?: string | null;
        name?: string | null;
        amount?: number | null;
        employer_tax?: boolean | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
