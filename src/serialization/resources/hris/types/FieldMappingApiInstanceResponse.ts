/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { FieldMappingApiInstance } from "./FieldMappingApiInstance";

export const FieldMappingApiInstanceResponse: core.serialization.ObjectSchema<
    serializers.hris.FieldMappingApiInstanceResponse.Raw,
    Merge.hris.FieldMappingApiInstanceResponse
> = core.serialization.object({
    benefit: core.serialization.property("Benefit", core.serialization.list(FieldMappingApiInstance).optional()),
    employerBenefit: core.serialization.property(
        "EmployerBenefit",
        core.serialization.list(FieldMappingApiInstance).optional()
    ),
    company: core.serialization.property("Company", core.serialization.list(FieldMappingApiInstance).optional()),
    employeePayrollRun: core.serialization.property(
        "EmployeePayrollRun",
        core.serialization.list(FieldMappingApiInstance).optional()
    ),
    employee: core.serialization.property("Employee", core.serialization.list(FieldMappingApiInstance).optional()),
    employment: core.serialization.property("Employment", core.serialization.list(FieldMappingApiInstance).optional()),
    location: core.serialization.property("Location", core.serialization.list(FieldMappingApiInstance).optional()),
    payrollRun: core.serialization.property("PayrollRun", core.serialization.list(FieldMappingApiInstance).optional()),
    team: core.serialization.property("Team", core.serialization.list(FieldMappingApiInstance).optional()),
    timeOff: core.serialization.property("TimeOff", core.serialization.list(FieldMappingApiInstance).optional()),
    timeOffBalance: core.serialization.property(
        "TimeOffBalance",
        core.serialization.list(FieldMappingApiInstance).optional()
    ),
    bankInfo: core.serialization.property("BankInfo", core.serialization.list(FieldMappingApiInstance).optional()),
    payGroup: core.serialization.property("PayGroup", core.serialization.list(FieldMappingApiInstance).optional()),
    group: core.serialization.property("Group", core.serialization.list(FieldMappingApiInstance).optional()),
    dependent: core.serialization.property("Dependent", core.serialization.list(FieldMappingApiInstance).optional()),
    timesheetEntry: core.serialization.property(
        "TimesheetEntry",
        core.serialization.list(FieldMappingApiInstance).optional()
    ),
});

export declare namespace FieldMappingApiInstanceResponse {
    interface Raw {
        Benefit?: FieldMappingApiInstance.Raw[] | null;
        EmployerBenefit?: FieldMappingApiInstance.Raw[] | null;
        Company?: FieldMappingApiInstance.Raw[] | null;
        EmployeePayrollRun?: FieldMappingApiInstance.Raw[] | null;
        Employee?: FieldMappingApiInstance.Raw[] | null;
        Employment?: FieldMappingApiInstance.Raw[] | null;
        Location?: FieldMappingApiInstance.Raw[] | null;
        PayrollRun?: FieldMappingApiInstance.Raw[] | null;
        Team?: FieldMappingApiInstance.Raw[] | null;
        TimeOff?: FieldMappingApiInstance.Raw[] | null;
        TimeOffBalance?: FieldMappingApiInstance.Raw[] | null;
        BankInfo?: FieldMappingApiInstance.Raw[] | null;
        PayGroup?: FieldMappingApiInstance.Raw[] | null;
        Group?: FieldMappingApiInstance.Raw[] | null;
        Dependent?: FieldMappingApiInstance.Raw[] | null;
        TimesheetEntry?: FieldMappingApiInstance.Raw[] | null;
    }
}
