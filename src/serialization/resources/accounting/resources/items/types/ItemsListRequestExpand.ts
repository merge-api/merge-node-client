/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ItemsListRequestExpand: core.serialization.Schema<
    serializers.accounting.ItemsListRequestExpand.Raw,
    Merge.accounting.ItemsListRequestExpand
> = core.serialization.enum_([
    "company",
    "company,purchase_tax_rate",
    "company,sales_tax_rate",
    "company,sales_tax_rate,purchase_tax_rate",
    "purchase_account",
    "purchase_account,company",
    "purchase_account,company,purchase_tax_rate",
    "purchase_account,company,sales_tax_rate",
    "purchase_account,company,sales_tax_rate,purchase_tax_rate",
    "purchase_account,purchase_tax_rate",
    "purchase_account,sales_account",
    "purchase_account,sales_account,company",
    "purchase_account,sales_account,company,purchase_tax_rate",
    "purchase_account,sales_account,company,sales_tax_rate",
    "purchase_account,sales_account,company,sales_tax_rate,purchase_tax_rate",
    "purchase_account,sales_account,purchase_tax_rate",
    "purchase_account,sales_account,sales_tax_rate",
    "purchase_account,sales_account,sales_tax_rate,purchase_tax_rate",
    "purchase_account,sales_tax_rate",
    "purchase_account,sales_tax_rate,purchase_tax_rate",
    "purchase_tax_rate",
    "sales_account",
    "sales_account,company",
    "sales_account,company,purchase_tax_rate",
    "sales_account,company,sales_tax_rate",
    "sales_account,company,sales_tax_rate,purchase_tax_rate",
    "sales_account,purchase_tax_rate",
    "sales_account,sales_tax_rate",
    "sales_account,sales_tax_rate,purchase_tax_rate",
    "sales_tax_rate",
    "sales_tax_rate,purchase_tax_rate",
]);

export declare namespace ItemsListRequestExpand {
    type Raw =
        | "company"
        | "company,purchase_tax_rate"
        | "company,sales_tax_rate"
        | "company,sales_tax_rate,purchase_tax_rate"
        | "purchase_account"
        | "purchase_account,company"
        | "purchase_account,company,purchase_tax_rate"
        | "purchase_account,company,sales_tax_rate"
        | "purchase_account,company,sales_tax_rate,purchase_tax_rate"
        | "purchase_account,purchase_tax_rate"
        | "purchase_account,sales_account"
        | "purchase_account,sales_account,company"
        | "purchase_account,sales_account,company,purchase_tax_rate"
        | "purchase_account,sales_account,company,sales_tax_rate"
        | "purchase_account,sales_account,company,sales_tax_rate,purchase_tax_rate"
        | "purchase_account,sales_account,purchase_tax_rate"
        | "purchase_account,sales_account,sales_tax_rate"
        | "purchase_account,sales_account,sales_tax_rate,purchase_tax_rate"
        | "purchase_account,sales_tax_rate"
        | "purchase_account,sales_tax_rate,purchase_tax_rate"
        | "purchase_tax_rate"
        | "sales_account"
        | "sales_account,company"
        | "sales_account,company,purchase_tax_rate"
        | "sales_account,company,sales_tax_rate"
        | "sales_account,company,sales_tax_rate,purchase_tax_rate"
        | "sales_account,purchase_tax_rate"
        | "sales_account,sales_tax_rate"
        | "sales_account,sales_tax_rate,purchase_tax_rate"
        | "sales_tax_rate"
        | "sales_tax_rate,purchase_tax_rate";
}
