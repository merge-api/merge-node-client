/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { GenderEnum } from "./GenderEnum";

export const EmployeeGender: core.serialization.Schema<serializers.hris.EmployeeGender.Raw, Merge.hris.EmployeeGender> =
    core.serialization.undiscriminatedUnion([GenderEnum, core.serialization.string()]);

export declare namespace EmployeeGender {
    type Raw = GenderEnum.Raw | string;
}
