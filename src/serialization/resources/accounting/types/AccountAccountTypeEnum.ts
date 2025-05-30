/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AccountAccountTypeEnum: core.serialization.Schema<
    serializers.accounting.AccountAccountTypeEnum.Raw,
    Merge.accounting.AccountAccountTypeEnum
> = core.serialization.enum_([
    "BANK",
    "CREDIT_CARD",
    "ACCOUNTS_PAYABLE",
    "ACCOUNTS_RECEIVABLE",
    "FIXED_ASSET",
    "OTHER_ASSET",
    "OTHER_CURRENT_ASSET",
    "OTHER_EXPENSE",
    "OTHER_INCOME",
    "COST_OF_GOODS_SOLD",
    "OTHER_CURRENT_LIABILITY",
    "LONG_TERM_LIABILITY",
    "NON_POSTING",
]);

export declare namespace AccountAccountTypeEnum {
    export type Raw =
        | "BANK"
        | "CREDIT_CARD"
        | "ACCOUNTS_PAYABLE"
        | "ACCOUNTS_RECEIVABLE"
        | "FIXED_ASSET"
        | "OTHER_ASSET"
        | "OTHER_CURRENT_ASSET"
        | "OTHER_EXPENSE"
        | "OTHER_INCOME"
        | "COST_OF_GOODS_SOLD"
        | "OTHER_CURRENT_LIABILITY"
        | "LONG_TERM_LIABILITY"
        | "NON_POSTING";
}
