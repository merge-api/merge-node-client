/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Status895Enum } from "./Status895Enum";

export const EmployeeStatus: core.serialization.Schema<
    serializers.accounting.EmployeeStatus.Raw,
    Merge.accounting.EmployeeStatus
> = core.serialization.undiscriminatedUnion([Status895Enum, core.serialization.string()]);

export declare namespace EmployeeStatus {
    type Raw = Status895Enum.Raw | string;
}