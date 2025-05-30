/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExternalTargetFieldApi } from "./ExternalTargetFieldApi";

export const ExternalTargetFieldApiResponse: core.serialization.ObjectSchema<
    serializers.hris.ExternalTargetFieldApiResponse.Raw,
    Merge.hris.ExternalTargetFieldApiResponse
> = core.serialization.object({
    benefit: core.serialization.property("Benefit", core.serialization.list(ExternalTargetFieldApi).optional()),
    employerBenefit: core.serialization.property(
        "EmployerBenefit",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    company: core.serialization.property("Company", core.serialization.list(ExternalTargetFieldApi).optional()),
    employeePayrollRun: core.serialization.property(
        "EmployeePayrollRun",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    employee: core.serialization.property("Employee", core.serialization.list(ExternalTargetFieldApi).optional()),
    employment: core.serialization.property("Employment", core.serialization.list(ExternalTargetFieldApi).optional()),
    location: core.serialization.property("Location", core.serialization.list(ExternalTargetFieldApi).optional()),
    payrollRun: core.serialization.property("PayrollRun", core.serialization.list(ExternalTargetFieldApi).optional()),
    team: core.serialization.property("Team", core.serialization.list(ExternalTargetFieldApi).optional()),
    timeOff: core.serialization.property("TimeOff", core.serialization.list(ExternalTargetFieldApi).optional()),
    timeOffBalance: core.serialization.property(
        "TimeOffBalance",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
    bankInfo: core.serialization.property("BankInfo", core.serialization.list(ExternalTargetFieldApi).optional()),
    payGroup: core.serialization.property("PayGroup", core.serialization.list(ExternalTargetFieldApi).optional()),
    group: core.serialization.property("Group", core.serialization.list(ExternalTargetFieldApi).optional()),
    dependent: core.serialization.property("Dependent", core.serialization.list(ExternalTargetFieldApi).optional()),
    timesheetEntry: core.serialization.property(
        "TimesheetEntry",
        core.serialization.list(ExternalTargetFieldApi).optional(),
    ),
});

export declare namespace ExternalTargetFieldApiResponse {
    export interface Raw {
        Benefit?: ExternalTargetFieldApi.Raw[] | null;
        EmployerBenefit?: ExternalTargetFieldApi.Raw[] | null;
        Company?: ExternalTargetFieldApi.Raw[] | null;
        EmployeePayrollRun?: ExternalTargetFieldApi.Raw[] | null;
        Employee?: ExternalTargetFieldApi.Raw[] | null;
        Employment?: ExternalTargetFieldApi.Raw[] | null;
        Location?: ExternalTargetFieldApi.Raw[] | null;
        PayrollRun?: ExternalTargetFieldApi.Raw[] | null;
        Team?: ExternalTargetFieldApi.Raw[] | null;
        TimeOff?: ExternalTargetFieldApi.Raw[] | null;
        TimeOffBalance?: ExternalTargetFieldApi.Raw[] | null;
        BankInfo?: ExternalTargetFieldApi.Raw[] | null;
        PayGroup?: ExternalTargetFieldApi.Raw[] | null;
        Group?: ExternalTargetFieldApi.Raw[] | null;
        Dependent?: ExternalTargetFieldApi.Raw[] | null;
        TimesheetEntry?: ExternalTargetFieldApi.Raw[] | null;
    }
}
