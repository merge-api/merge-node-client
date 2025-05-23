/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const EmployeesListRequestShowEnumOrigins: core.serialization.Schema<
    serializers.hris.EmployeesListRequestShowEnumOrigins.Raw,
    Merge.hris.EmployeesListRequestShowEnumOrigins
> = core.serialization.enum_([
    "employment_status",
    "employment_status,ethnicity",
    "employment_status,ethnicity,gender",
    "employment_status,ethnicity,gender,marital_status",
    "employment_status,ethnicity,marital_status",
    "employment_status,gender",
    "employment_status,gender,marital_status",
    "employment_status,marital_status",
    "ethnicity",
    "ethnicity,gender",
    "ethnicity,gender,marital_status",
    "ethnicity,marital_status",
    "gender",
    "gender,marital_status",
    "marital_status",
]);

export declare namespace EmployeesListRequestShowEnumOrigins {
    export type Raw =
        | "employment_status"
        | "employment_status,ethnicity"
        | "employment_status,ethnicity,gender"
        | "employment_status,ethnicity,gender,marital_status"
        | "employment_status,ethnicity,marital_status"
        | "employment_status,gender"
        | "employment_status,gender,marital_status"
        | "employment_status,marital_status"
        | "ethnicity"
        | "ethnicity,gender"
        | "ethnicity,gender,marital_status"
        | "ethnicity,marital_status"
        | "gender"
        | "gender,marital_status"
        | "marital_status";
}
