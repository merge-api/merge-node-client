/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { MaritalStatusEnum } from "./MaritalStatusEnum";

export const EmployeeRequestMaritalStatus: core.serialization.Schema<
    serializers.hris.EmployeeRequestMaritalStatus.Raw,
    Merge.hris.EmployeeRequestMaritalStatus
> = core.serialization.undiscriminatedUnion([MaritalStatusEnum, core.serialization.string()]);

export declare namespace EmployeeRequestMaritalStatus {
    type Raw = MaritalStatusEnum.Raw | string;
}
