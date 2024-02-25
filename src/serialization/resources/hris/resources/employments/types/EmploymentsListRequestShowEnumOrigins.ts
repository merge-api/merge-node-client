/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const EmploymentsListRequestShowEnumOrigins: core.serialization.Schema<
    serializers.hris.EmploymentsListRequestShowEnumOrigins.Raw,
    Merge.hris.EmploymentsListRequestShowEnumOrigins
> = core.serialization.enum_([
    "employment_type",
    "employment_type,flsa_status",
    "employment_type,flsa_status,pay_frequency",
    "employment_type,flsa_status,pay_frequency,pay_period",
    "employment_type,flsa_status,pay_period",
    "employment_type,pay_frequency",
    "employment_type,pay_frequency,pay_period",
    "employment_type,pay_period",
    "flsa_status",
    "flsa_status,pay_frequency",
    "flsa_status,pay_frequency,pay_period",
    "flsa_status,pay_period",
    "pay_frequency",
    "pay_frequency,pay_period",
    "pay_period",
]);

export declare namespace EmploymentsListRequestShowEnumOrigins {
    type Raw =
        | "employment_type"
        | "employment_type,flsa_status"
        | "employment_type,flsa_status,pay_frequency"
        | "employment_type,flsa_status,pay_frequency,pay_period"
        | "employment_type,flsa_status,pay_period"
        | "employment_type,pay_frequency"
        | "employment_type,pay_frequency,pay_period"
        | "employment_type,pay_period"
        | "flsa_status"
        | "flsa_status,pay_frequency"
        | "flsa_status,pay_frequency,pay_period"
        | "flsa_status,pay_period"
        | "pay_frequency"
        | "pay_frequency,pay_period"
        | "pay_period";
}