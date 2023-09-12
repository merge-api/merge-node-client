/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeeRequest: core.serialization.ObjectSchema<
    serializers.hris.EmployeeRequest.Raw,
    Merge.hris.EmployeeRequest
> = core.serialization.object({
    employeeNumber: core.serialization.property("employee_number", core.serialization.string().optional()),
    company: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestCompany).optional(),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    preferredName: core.serialization.property("preferred_name", core.serialization.string().optional()),
    displayFullName: core.serialization.property("display_full_name", core.serialization.string().optional()),
    username: core.serialization.string().optional(),
    groups: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestGroupsItem).optional())
        .optional(),
    workEmail: core.serialization.property("work_email", core.serialization.string().optional()),
    personalEmail: core.serialization.property("personal_email", core.serialization.string().optional()),
    mobilePhoneNumber: core.serialization.property("mobile_phone_number", core.serialization.string().optional()),
    employments: core.serialization
        .list(
            core.serialization
                .lazy(async () => (await import("../../..")).hris.EmployeeRequestEmploymentsItem)
                .optional()
        )
        .optional(),
    homeLocation: core.serialization.property(
        "home_location",
        core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestHomeLocation).optional()
    ),
    workLocation: core.serialization.property(
        "work_location",
        core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestWorkLocation).optional()
    ),
    manager: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestManager).optional(),
    team: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestTeam).optional(),
    payGroup: core.serialization.property(
        "pay_group",
        core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestPayGroup).optional()
    ),
    ssn: core.serialization.string().optional(),
    gender: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestGender).optional(),
    ethnicity: core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestEthnicity).optional(),
    maritalStatus: core.serialization.property(
        "marital_status",
        core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestMaritalStatus).optional()
    ),
    dateOfBirth: core.serialization.property("date_of_birth", core.serialization.date().optional()),
    hireDate: core.serialization.property("hire_date", core.serialization.date().optional()),
    startDate: core.serialization.property("start_date", core.serialization.date().optional()),
    employmentStatus: core.serialization.property(
        "employment_status",
        core.serialization.lazy(async () => (await import("../../..")).hris.EmployeeRequestEmploymentStatus).optional()
    ),
    terminationDate: core.serialization.property("termination_date", core.serialization.date().optional()),
    avatar: core.serialization.string().optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace EmployeeRequest {
    interface Raw {
        employee_number?: string | null;
        company?: serializers.hris.EmployeeRequestCompany.Raw | null;
        first_name?: string | null;
        last_name?: string | null;
        preferred_name?: string | null;
        display_full_name?: string | null;
        username?: string | null;
        groups?: (serializers.hris.EmployeeRequestGroupsItem.Raw | null | undefined)[] | null;
        work_email?: string | null;
        personal_email?: string | null;
        mobile_phone_number?: string | null;
        employments?: (serializers.hris.EmployeeRequestEmploymentsItem.Raw | null | undefined)[] | null;
        home_location?: serializers.hris.EmployeeRequestHomeLocation.Raw | null;
        work_location?: serializers.hris.EmployeeRequestWorkLocation.Raw | null;
        manager?: serializers.hris.EmployeeRequestManager.Raw | null;
        team?: serializers.hris.EmployeeRequestTeam.Raw | null;
        pay_group?: serializers.hris.EmployeeRequestPayGroup.Raw | null;
        ssn?: string | null;
        gender?: serializers.hris.EmployeeRequestGender.Raw | null;
        ethnicity?: serializers.hris.EmployeeRequestEthnicity.Raw | null;
        marital_status?: serializers.hris.EmployeeRequestMaritalStatus.Raw | null;
        date_of_birth?: string | null;
        hire_date?: string | null;
        start_date?: string | null;
        employment_status?: serializers.hris.EmployeeRequestEmploymentStatus.Raw | null;
        termination_date?: string | null;
        avatar?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
