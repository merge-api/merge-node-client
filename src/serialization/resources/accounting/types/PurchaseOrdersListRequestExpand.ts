/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PurchaseOrdersListRequestExpand: core.serialization.Schema<
    serializers.accounting.PurchaseOrdersListRequestExpand.Raw,
    Merge.accounting.PurchaseOrdersListRequestExpand
> = core.serialization.enum_([
    "accounting_period",
    "company",
    "company,accounting_period",
    "delivery_address",
    "delivery_address,accounting_period",
    "delivery_address,company",
    "delivery_address,company,accounting_period",
    "delivery_address,vendor",
    "delivery_address,vendor,accounting_period",
    "delivery_address,vendor,company",
    "delivery_address,vendor,company,accounting_period",
    "line_items",
    "line_items,accounting_period",
    "line_items,company",
    "line_items,company,accounting_period",
    "line_items,delivery_address",
    "line_items,delivery_address,accounting_period",
    "line_items,delivery_address,company",
    "line_items,delivery_address,company,accounting_period",
    "line_items,delivery_address,vendor",
    "line_items,delivery_address,vendor,accounting_period",
    "line_items,delivery_address,vendor,company",
    "line_items,delivery_address,vendor,company,accounting_period",
    "line_items,tracking_categories",
    "line_items,tracking_categories,accounting_period",
    "line_items,tracking_categories,company",
    "line_items,tracking_categories,company,accounting_period",
    "line_items,tracking_categories,delivery_address",
    "line_items,tracking_categories,delivery_address,accounting_period",
    "line_items,tracking_categories,delivery_address,company",
    "line_items,tracking_categories,delivery_address,company,accounting_period",
    "line_items,tracking_categories,delivery_address,vendor",
    "line_items,tracking_categories,delivery_address,vendor,accounting_period",
    "line_items,tracking_categories,delivery_address,vendor,company",
    "line_items,tracking_categories,delivery_address,vendor,company,accounting_period",
    "line_items,tracking_categories,vendor",
    "line_items,tracking_categories,vendor,accounting_period",
    "line_items,tracking_categories,vendor,company",
    "line_items,tracking_categories,vendor,company,accounting_period",
    "line_items,vendor",
    "line_items,vendor,accounting_period",
    "line_items,vendor,company",
    "line_items,vendor,company,accounting_period",
    "tracking_categories",
    "tracking_categories,accounting_period",
    "tracking_categories,company",
    "tracking_categories,company,accounting_period",
    "tracking_categories,delivery_address",
    "tracking_categories,delivery_address,accounting_period",
    "tracking_categories,delivery_address,company",
    "tracking_categories,delivery_address,company,accounting_period",
    "tracking_categories,delivery_address,vendor",
    "tracking_categories,delivery_address,vendor,accounting_period",
    "tracking_categories,delivery_address,vendor,company",
    "tracking_categories,delivery_address,vendor,company,accounting_period",
    "tracking_categories,vendor",
    "tracking_categories,vendor,accounting_period",
    "tracking_categories,vendor,company",
    "tracking_categories,vendor,company,accounting_period",
    "vendor",
    "vendor,accounting_period",
    "vendor,company",
    "vendor,company,accounting_period",
]);

export declare namespace PurchaseOrdersListRequestExpand {
    type Raw =
        | "accounting_period"
        | "company"
        | "company,accounting_period"
        | "delivery_address"
        | "delivery_address,accounting_period"
        | "delivery_address,company"
        | "delivery_address,company,accounting_period"
        | "delivery_address,vendor"
        | "delivery_address,vendor,accounting_period"
        | "delivery_address,vendor,company"
        | "delivery_address,vendor,company,accounting_period"
        | "line_items"
        | "line_items,accounting_period"
        | "line_items,company"
        | "line_items,company,accounting_period"
        | "line_items,delivery_address"
        | "line_items,delivery_address,accounting_period"
        | "line_items,delivery_address,company"
        | "line_items,delivery_address,company,accounting_period"
        | "line_items,delivery_address,vendor"
        | "line_items,delivery_address,vendor,accounting_period"
        | "line_items,delivery_address,vendor,company"
        | "line_items,delivery_address,vendor,company,accounting_period"
        | "line_items,tracking_categories"
        | "line_items,tracking_categories,accounting_period"
        | "line_items,tracking_categories,company"
        | "line_items,tracking_categories,company,accounting_period"
        | "line_items,tracking_categories,delivery_address"
        | "line_items,tracking_categories,delivery_address,accounting_period"
        | "line_items,tracking_categories,delivery_address,company"
        | "line_items,tracking_categories,delivery_address,company,accounting_period"
        | "line_items,tracking_categories,delivery_address,vendor"
        | "line_items,tracking_categories,delivery_address,vendor,accounting_period"
        | "line_items,tracking_categories,delivery_address,vendor,company"
        | "line_items,tracking_categories,delivery_address,vendor,company,accounting_period"
        | "line_items,tracking_categories,vendor"
        | "line_items,tracking_categories,vendor,accounting_period"
        | "line_items,tracking_categories,vendor,company"
        | "line_items,tracking_categories,vendor,company,accounting_period"
        | "line_items,vendor"
        | "line_items,vendor,accounting_period"
        | "line_items,vendor,company"
        | "line_items,vendor,company,accounting_period"
        | "tracking_categories"
        | "tracking_categories,accounting_period"
        | "tracking_categories,company"
        | "tracking_categories,company,accounting_period"
        | "tracking_categories,delivery_address"
        | "tracking_categories,delivery_address,accounting_period"
        | "tracking_categories,delivery_address,company"
        | "tracking_categories,delivery_address,company,accounting_period"
        | "tracking_categories,delivery_address,vendor"
        | "tracking_categories,delivery_address,vendor,accounting_period"
        | "tracking_categories,delivery_address,vendor,company"
        | "tracking_categories,delivery_address,vendor,company,accounting_period"
        | "tracking_categories,vendor"
        | "tracking_categories,vendor,accounting_period"
        | "tracking_categories,vendor,company"
        | "tracking_categories,vendor,company,accounting_period"
        | "vendor"
        | "vendor,accounting_period"
        | "vendor,company"
        | "vendor,company,accounting_period";
}
