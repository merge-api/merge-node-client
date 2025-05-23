/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PhoneNumberTypeEnum } from "./PhoneNumberTypeEnum";

export const PhoneNumberPhoneNumberType: core.serialization.Schema<
    serializers.ats.PhoneNumberPhoneNumberType.Raw,
    Merge.ats.PhoneNumberPhoneNumberType
> = core.serialization.undiscriminatedUnion([PhoneNumberTypeEnum, core.serialization.string()]);

export declare namespace PhoneNumberPhoneNumberType {
    export type Raw = PhoneNumberTypeEnum.Raw | string;
}
