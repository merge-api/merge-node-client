/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaymentTypeEnum: core.serialization.Schema<
    serializers.accounting.PaymentTypeEnum.Raw,
    Merge.accounting.PaymentTypeEnum
> = core.serialization.enum_(["ACCOUNTS_PAYABLE", "ACCOUNTS_RECEIVABLE"]);

export declare namespace PaymentTypeEnum {
    type Raw = "ACCOUNTS_PAYABLE" | "ACCOUNTS_RECEIVABLE";
}
