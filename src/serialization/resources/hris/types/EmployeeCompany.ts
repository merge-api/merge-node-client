/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Company } from "./Company";

export const EmployeeCompany: core.serialization.Schema<
    serializers.hris.EmployeeCompany.Raw,
    Merge.hris.EmployeeCompany
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Company]);

export declare namespace EmployeeCompany {
    export type Raw = string | Company.Raw;
}
