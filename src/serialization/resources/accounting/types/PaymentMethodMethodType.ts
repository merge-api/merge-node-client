/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { MethodTypeEnum } from "./MethodTypeEnum";

export const PaymentMethodMethodType: core.serialization.Schema<
    serializers.accounting.PaymentMethodMethodType.Raw,
    Merge.accounting.PaymentMethodMethodType
> = core.serialization.undiscriminatedUnion([MethodTypeEnum, core.serialization.string()]);

export declare namespace PaymentMethodMethodType {
    type Raw = MethodTypeEnum.Raw | string;
}
