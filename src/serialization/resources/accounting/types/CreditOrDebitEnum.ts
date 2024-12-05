/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const CreditOrDebitEnum: core.serialization.Schema<
    serializers.accounting.CreditOrDebitEnum.Raw,
    Merge.accounting.CreditOrDebitEnum
> = core.serialization.enum_(["CREDIT", "DEBIT"]);

export declare namespace CreditOrDebitEnum {
    type Raw = "CREDIT" | "DEBIT";
}
