/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InvoicesRetrieveRequestExpand: core.serialization.Schema<
    serializers.accounting.InvoicesRetrieveRequestExpand.Raw,
    Merge.accounting.InvoicesRetrieveRequestExpand
> = core.serialization.enum_([
    "accounting_period",
    "applied_payments",
    "applied_payments,accounting_period",
    "applied_payments,company",
    "applied_payments,company,accounting_period",
    "applied_payments,contact",
    "applied_payments,contact,accounting_period",
    "applied_payments,contact,company",
    "applied_payments,contact,company,accounting_period",
    "applied_payments,line_items",
    "applied_payments,line_items,accounting_period",
    "applied_payments,line_items,company",
    "applied_payments,line_items,company,accounting_period",
    "applied_payments,line_items,contact",
    "applied_payments,line_items,contact,accounting_period",
    "applied_payments,line_items,contact,company",
    "applied_payments,line_items,contact,company,accounting_period",
    "applied_payments,line_items,purchase_orders",
    "applied_payments,line_items,purchase_orders,accounting_period",
    "applied_payments,line_items,purchase_orders,company",
    "applied_payments,line_items,purchase_orders,company,accounting_period",
    "applied_payments,line_items,purchase_orders,contact",
    "applied_payments,line_items,purchase_orders,contact,accounting_period",
    "applied_payments,line_items,purchase_orders,contact,company",
    "applied_payments,line_items,purchase_orders,contact,company,accounting_period",
    "applied_payments,line_items,tracking_categories",
    "applied_payments,line_items,tracking_categories,accounting_period",
    "applied_payments,line_items,tracking_categories,company",
    "applied_payments,line_items,tracking_categories,company,accounting_period",
    "applied_payments,line_items,tracking_categories,contact",
    "applied_payments,line_items,tracking_categories,contact,accounting_period",
    "applied_payments,line_items,tracking_categories,contact,company",
    "applied_payments,line_items,tracking_categories,contact,company,accounting_period",
    "applied_payments,line_items,tracking_categories,purchase_orders",
    "applied_payments,line_items,tracking_categories,purchase_orders,accounting_period",
    "applied_payments,line_items,tracking_categories,purchase_orders,company",
    "applied_payments,line_items,tracking_categories,purchase_orders,company,accounting_period",
    "applied_payments,line_items,tracking_categories,purchase_orders,contact",
    "applied_payments,line_items,tracking_categories,purchase_orders,contact,accounting_period",
    "applied_payments,line_items,tracking_categories,purchase_orders,contact,company",
    "applied_payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period",
    "applied_payments,purchase_orders",
    "applied_payments,purchase_orders,accounting_period",
    "applied_payments,purchase_orders,company",
    "applied_payments,purchase_orders,company,accounting_period",
    "applied_payments,purchase_orders,contact",
    "applied_payments,purchase_orders,contact,accounting_period",
    "applied_payments,purchase_orders,contact,company",
    "applied_payments,purchase_orders,contact,company,accounting_period",
    "applied_payments,tracking_categories",
    "applied_payments,tracking_categories,accounting_period",
    "applied_payments,tracking_categories,company",
    "applied_payments,tracking_categories,company,accounting_period",
    "applied_payments,tracking_categories,contact",
    "applied_payments,tracking_categories,contact,accounting_period",
    "applied_payments,tracking_categories,contact,company",
    "applied_payments,tracking_categories,contact,company,accounting_period",
    "applied_payments,tracking_categories,purchase_orders",
    "applied_payments,tracking_categories,purchase_orders,accounting_period",
    "applied_payments,tracking_categories,purchase_orders,company",
    "applied_payments,tracking_categories,purchase_orders,company,accounting_period",
    "applied_payments,tracking_categories,purchase_orders,contact",
    "applied_payments,tracking_categories,purchase_orders,contact,accounting_period",
    "applied_payments,tracking_categories,purchase_orders,contact,company",
    "applied_payments,tracking_categories,purchase_orders,contact,company,accounting_period",
    "company",
    "company,accounting_period",
    "contact",
    "contact,accounting_period",
    "contact,company",
    "contact,company,accounting_period",
    "line_items",
    "line_items,accounting_period",
    "line_items,company",
    "line_items,company,accounting_period",
    "line_items,contact",
    "line_items,contact,accounting_period",
    "line_items,contact,company",
    "line_items,contact,company,accounting_period",
    "line_items,purchase_orders",
    "line_items,purchase_orders,accounting_period",
    "line_items,purchase_orders,company",
    "line_items,purchase_orders,company,accounting_period",
    "line_items,purchase_orders,contact",
    "line_items,purchase_orders,contact,accounting_period",
    "line_items,purchase_orders,contact,company",
    "line_items,purchase_orders,contact,company,accounting_period",
    "line_items,tracking_categories",
    "line_items,tracking_categories,accounting_period",
    "line_items,tracking_categories,company",
    "line_items,tracking_categories,company,accounting_period",
    "line_items,tracking_categories,contact",
    "line_items,tracking_categories,contact,accounting_period",
    "line_items,tracking_categories,contact,company",
    "line_items,tracking_categories,contact,company,accounting_period",
    "line_items,tracking_categories,purchase_orders",
    "line_items,tracking_categories,purchase_orders,accounting_period",
    "line_items,tracking_categories,purchase_orders,company",
    "line_items,tracking_categories,purchase_orders,company,accounting_period",
    "line_items,tracking_categories,purchase_orders,contact",
    "line_items,tracking_categories,purchase_orders,contact,accounting_period",
    "line_items,tracking_categories,purchase_orders,contact,company",
    "line_items,tracking_categories,purchase_orders,contact,company,accounting_period",
    "payments",
    "payments,accounting_period",
    "payments,applied_payments",
    "payments,applied_payments,accounting_period",
    "payments,applied_payments,company",
    "payments,applied_payments,company,accounting_period",
    "payments,applied_payments,contact",
    "payments,applied_payments,contact,accounting_period",
    "payments,applied_payments,contact,company",
    "payments,applied_payments,contact,company,accounting_period",
    "payments,applied_payments,line_items",
    "payments,applied_payments,line_items,accounting_period",
    "payments,applied_payments,line_items,company",
    "payments,applied_payments,line_items,company,accounting_period",
    "payments,applied_payments,line_items,contact",
    "payments,applied_payments,line_items,contact,accounting_period",
    "payments,applied_payments,line_items,contact,company",
    "payments,applied_payments,line_items,contact,company,accounting_period",
    "payments,applied_payments,line_items,purchase_orders",
    "payments,applied_payments,line_items,purchase_orders,accounting_period",
    "payments,applied_payments,line_items,purchase_orders,company",
    "payments,applied_payments,line_items,purchase_orders,company,accounting_period",
    "payments,applied_payments,line_items,purchase_orders,contact",
    "payments,applied_payments,line_items,purchase_orders,contact,accounting_period",
    "payments,applied_payments,line_items,purchase_orders,contact,company",
    "payments,applied_payments,line_items,purchase_orders,contact,company,accounting_period",
    "payments,applied_payments,line_items,tracking_categories",
    "payments,applied_payments,line_items,tracking_categories,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,company",
    "payments,applied_payments,line_items,tracking_categories,company,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,contact",
    "payments,applied_payments,line_items,tracking_categories,contact,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,contact,company",
    "payments,applied_payments,line_items,tracking_categories,contact,company,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,company",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,company,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,accounting_period",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,company",
    "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period",
    "payments,applied_payments,purchase_orders",
    "payments,applied_payments,purchase_orders,accounting_period",
    "payments,applied_payments,purchase_orders,company",
    "payments,applied_payments,purchase_orders,company,accounting_period",
    "payments,applied_payments,purchase_orders,contact",
    "payments,applied_payments,purchase_orders,contact,accounting_period",
    "payments,applied_payments,purchase_orders,contact,company",
    "payments,applied_payments,purchase_orders,contact,company,accounting_period",
    "payments,applied_payments,tracking_categories",
    "payments,applied_payments,tracking_categories,accounting_period",
    "payments,applied_payments,tracking_categories,company",
    "payments,applied_payments,tracking_categories,company,accounting_period",
    "payments,applied_payments,tracking_categories,contact",
    "payments,applied_payments,tracking_categories,contact,accounting_period",
    "payments,applied_payments,tracking_categories,contact,company",
    "payments,applied_payments,tracking_categories,contact,company,accounting_period",
    "payments,applied_payments,tracking_categories,purchase_orders",
    "payments,applied_payments,tracking_categories,purchase_orders,accounting_period",
    "payments,applied_payments,tracking_categories,purchase_orders,company",
    "payments,applied_payments,tracking_categories,purchase_orders,company,accounting_period",
    "payments,applied_payments,tracking_categories,purchase_orders,contact",
    "payments,applied_payments,tracking_categories,purchase_orders,contact,accounting_period",
    "payments,applied_payments,tracking_categories,purchase_orders,contact,company",
    "payments,applied_payments,tracking_categories,purchase_orders,contact,company,accounting_period",
    "payments,company",
    "payments,company,accounting_period",
    "payments,contact",
    "payments,contact,accounting_period",
    "payments,contact,company",
    "payments,contact,company,accounting_period",
    "payments,line_items",
    "payments,line_items,accounting_period",
    "payments,line_items,company",
    "payments,line_items,company,accounting_period",
    "payments,line_items,contact",
    "payments,line_items,contact,accounting_period",
    "payments,line_items,contact,company",
    "payments,line_items,contact,company,accounting_period",
    "payments,line_items,purchase_orders",
    "payments,line_items,purchase_orders,accounting_period",
    "payments,line_items,purchase_orders,company",
    "payments,line_items,purchase_orders,company,accounting_period",
    "payments,line_items,purchase_orders,contact",
    "payments,line_items,purchase_orders,contact,accounting_period",
    "payments,line_items,purchase_orders,contact,company",
    "payments,line_items,purchase_orders,contact,company,accounting_period",
    "payments,line_items,tracking_categories",
    "payments,line_items,tracking_categories,accounting_period",
    "payments,line_items,tracking_categories,company",
    "payments,line_items,tracking_categories,company,accounting_period",
    "payments,line_items,tracking_categories,contact",
    "payments,line_items,tracking_categories,contact,accounting_period",
    "payments,line_items,tracking_categories,contact,company",
    "payments,line_items,tracking_categories,contact,company,accounting_period",
    "payments,line_items,tracking_categories,purchase_orders",
    "payments,line_items,tracking_categories,purchase_orders,accounting_period",
    "payments,line_items,tracking_categories,purchase_orders,company",
    "payments,line_items,tracking_categories,purchase_orders,company,accounting_period",
    "payments,line_items,tracking_categories,purchase_orders,contact",
    "payments,line_items,tracking_categories,purchase_orders,contact,accounting_period",
    "payments,line_items,tracking_categories,purchase_orders,contact,company",
    "payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period",
    "payments,purchase_orders",
    "payments,purchase_orders,accounting_period",
    "payments,purchase_orders,company",
    "payments,purchase_orders,company,accounting_period",
    "payments,purchase_orders,contact",
    "payments,purchase_orders,contact,accounting_period",
    "payments,purchase_orders,contact,company",
    "payments,purchase_orders,contact,company,accounting_period",
    "payments,tracking_categories",
    "payments,tracking_categories,accounting_period",
    "payments,tracking_categories,company",
    "payments,tracking_categories,company,accounting_period",
    "payments,tracking_categories,contact",
    "payments,tracking_categories,contact,accounting_period",
    "payments,tracking_categories,contact,company",
    "payments,tracking_categories,contact,company,accounting_period",
    "payments,tracking_categories,purchase_orders",
    "payments,tracking_categories,purchase_orders,accounting_period",
    "payments,tracking_categories,purchase_orders,company",
    "payments,tracking_categories,purchase_orders,company,accounting_period",
    "payments,tracking_categories,purchase_orders,contact",
    "payments,tracking_categories,purchase_orders,contact,accounting_period",
    "payments,tracking_categories,purchase_orders,contact,company",
    "payments,tracking_categories,purchase_orders,contact,company,accounting_period",
    "purchase_orders",
    "purchase_orders,accounting_period",
    "purchase_orders,company",
    "purchase_orders,company,accounting_period",
    "purchase_orders,contact",
    "purchase_orders,contact,accounting_period",
    "purchase_orders,contact,company",
    "purchase_orders,contact,company,accounting_period",
    "tracking_categories",
    "tracking_categories,accounting_period",
    "tracking_categories,company",
    "tracking_categories,company,accounting_period",
    "tracking_categories,contact",
    "tracking_categories,contact,accounting_period",
    "tracking_categories,contact,company",
    "tracking_categories,contact,company,accounting_period",
    "tracking_categories,purchase_orders",
    "tracking_categories,purchase_orders,accounting_period",
    "tracking_categories,purchase_orders,company",
    "tracking_categories,purchase_orders,company,accounting_period",
    "tracking_categories,purchase_orders,contact",
    "tracking_categories,purchase_orders,contact,accounting_period",
    "tracking_categories,purchase_orders,contact,company",
    "tracking_categories,purchase_orders,contact,company,accounting_period",
]);

export declare namespace InvoicesRetrieveRequestExpand {
    type Raw =
        | "accounting_period"
        | "applied_payments"
        | "applied_payments,accounting_period"
        | "applied_payments,company"
        | "applied_payments,company,accounting_period"
        | "applied_payments,contact"
        | "applied_payments,contact,accounting_period"
        | "applied_payments,contact,company"
        | "applied_payments,contact,company,accounting_period"
        | "applied_payments,line_items"
        | "applied_payments,line_items,accounting_period"
        | "applied_payments,line_items,company"
        | "applied_payments,line_items,company,accounting_period"
        | "applied_payments,line_items,contact"
        | "applied_payments,line_items,contact,accounting_period"
        | "applied_payments,line_items,contact,company"
        | "applied_payments,line_items,contact,company,accounting_period"
        | "applied_payments,line_items,purchase_orders"
        | "applied_payments,line_items,purchase_orders,accounting_period"
        | "applied_payments,line_items,purchase_orders,company"
        | "applied_payments,line_items,purchase_orders,company,accounting_period"
        | "applied_payments,line_items,purchase_orders,contact"
        | "applied_payments,line_items,purchase_orders,contact,accounting_period"
        | "applied_payments,line_items,purchase_orders,contact,company"
        | "applied_payments,line_items,purchase_orders,contact,company,accounting_period"
        | "applied_payments,line_items,tracking_categories"
        | "applied_payments,line_items,tracking_categories,accounting_period"
        | "applied_payments,line_items,tracking_categories,company"
        | "applied_payments,line_items,tracking_categories,company,accounting_period"
        | "applied_payments,line_items,tracking_categories,contact"
        | "applied_payments,line_items,tracking_categories,contact,accounting_period"
        | "applied_payments,line_items,tracking_categories,contact,company"
        | "applied_payments,line_items,tracking_categories,contact,company,accounting_period"
        | "applied_payments,line_items,tracking_categories,purchase_orders"
        | "applied_payments,line_items,tracking_categories,purchase_orders,accounting_period"
        | "applied_payments,line_items,tracking_categories,purchase_orders,company"
        | "applied_payments,line_items,tracking_categories,purchase_orders,company,accounting_period"
        | "applied_payments,line_items,tracking_categories,purchase_orders,contact"
        | "applied_payments,line_items,tracking_categories,purchase_orders,contact,accounting_period"
        | "applied_payments,line_items,tracking_categories,purchase_orders,contact,company"
        | "applied_payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "applied_payments,purchase_orders"
        | "applied_payments,purchase_orders,accounting_period"
        | "applied_payments,purchase_orders,company"
        | "applied_payments,purchase_orders,company,accounting_period"
        | "applied_payments,purchase_orders,contact"
        | "applied_payments,purchase_orders,contact,accounting_period"
        | "applied_payments,purchase_orders,contact,company"
        | "applied_payments,purchase_orders,contact,company,accounting_period"
        | "applied_payments,tracking_categories"
        | "applied_payments,tracking_categories,accounting_period"
        | "applied_payments,tracking_categories,company"
        | "applied_payments,tracking_categories,company,accounting_period"
        | "applied_payments,tracking_categories,contact"
        | "applied_payments,tracking_categories,contact,accounting_period"
        | "applied_payments,tracking_categories,contact,company"
        | "applied_payments,tracking_categories,contact,company,accounting_period"
        | "applied_payments,tracking_categories,purchase_orders"
        | "applied_payments,tracking_categories,purchase_orders,accounting_period"
        | "applied_payments,tracking_categories,purchase_orders,company"
        | "applied_payments,tracking_categories,purchase_orders,company,accounting_period"
        | "applied_payments,tracking_categories,purchase_orders,contact"
        | "applied_payments,tracking_categories,purchase_orders,contact,accounting_period"
        | "applied_payments,tracking_categories,purchase_orders,contact,company"
        | "applied_payments,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "company"
        | "company,accounting_period"
        | "contact"
        | "contact,accounting_period"
        | "contact,company"
        | "contact,company,accounting_period"
        | "line_items"
        | "line_items,accounting_period"
        | "line_items,company"
        | "line_items,company,accounting_period"
        | "line_items,contact"
        | "line_items,contact,accounting_period"
        | "line_items,contact,company"
        | "line_items,contact,company,accounting_period"
        | "line_items,purchase_orders"
        | "line_items,purchase_orders,accounting_period"
        | "line_items,purchase_orders,company"
        | "line_items,purchase_orders,company,accounting_period"
        | "line_items,purchase_orders,contact"
        | "line_items,purchase_orders,contact,accounting_period"
        | "line_items,purchase_orders,contact,company"
        | "line_items,purchase_orders,contact,company,accounting_period"
        | "line_items,tracking_categories"
        | "line_items,tracking_categories,accounting_period"
        | "line_items,tracking_categories,company"
        | "line_items,tracking_categories,company,accounting_period"
        | "line_items,tracking_categories,contact"
        | "line_items,tracking_categories,contact,accounting_period"
        | "line_items,tracking_categories,contact,company"
        | "line_items,tracking_categories,contact,company,accounting_period"
        | "line_items,tracking_categories,purchase_orders"
        | "line_items,tracking_categories,purchase_orders,accounting_period"
        | "line_items,tracking_categories,purchase_orders,company"
        | "line_items,tracking_categories,purchase_orders,company,accounting_period"
        | "line_items,tracking_categories,purchase_orders,contact"
        | "line_items,tracking_categories,purchase_orders,contact,accounting_period"
        | "line_items,tracking_categories,purchase_orders,contact,company"
        | "line_items,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "payments"
        | "payments,accounting_period"
        | "payments,applied_payments"
        | "payments,applied_payments,accounting_period"
        | "payments,applied_payments,company"
        | "payments,applied_payments,company,accounting_period"
        | "payments,applied_payments,contact"
        | "payments,applied_payments,contact,accounting_period"
        | "payments,applied_payments,contact,company"
        | "payments,applied_payments,contact,company,accounting_period"
        | "payments,applied_payments,line_items"
        | "payments,applied_payments,line_items,accounting_period"
        | "payments,applied_payments,line_items,company"
        | "payments,applied_payments,line_items,company,accounting_period"
        | "payments,applied_payments,line_items,contact"
        | "payments,applied_payments,line_items,contact,accounting_period"
        | "payments,applied_payments,line_items,contact,company"
        | "payments,applied_payments,line_items,contact,company,accounting_period"
        | "payments,applied_payments,line_items,purchase_orders"
        | "payments,applied_payments,line_items,purchase_orders,accounting_period"
        | "payments,applied_payments,line_items,purchase_orders,company"
        | "payments,applied_payments,line_items,purchase_orders,company,accounting_period"
        | "payments,applied_payments,line_items,purchase_orders,contact"
        | "payments,applied_payments,line_items,purchase_orders,contact,accounting_period"
        | "payments,applied_payments,line_items,purchase_orders,contact,company"
        | "payments,applied_payments,line_items,purchase_orders,contact,company,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories"
        | "payments,applied_payments,line_items,tracking_categories,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,company"
        | "payments,applied_payments,line_items,tracking_categories,company,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,contact"
        | "payments,applied_payments,line_items,tracking_categories,contact,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,contact,company"
        | "payments,applied_payments,line_items,tracking_categories,contact,company,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,company"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,company,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,accounting_period"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,company"
        | "payments,applied_payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "payments,applied_payments,purchase_orders"
        | "payments,applied_payments,purchase_orders,accounting_period"
        | "payments,applied_payments,purchase_orders,company"
        | "payments,applied_payments,purchase_orders,company,accounting_period"
        | "payments,applied_payments,purchase_orders,contact"
        | "payments,applied_payments,purchase_orders,contact,accounting_period"
        | "payments,applied_payments,purchase_orders,contact,company"
        | "payments,applied_payments,purchase_orders,contact,company,accounting_period"
        | "payments,applied_payments,tracking_categories"
        | "payments,applied_payments,tracking_categories,accounting_period"
        | "payments,applied_payments,tracking_categories,company"
        | "payments,applied_payments,tracking_categories,company,accounting_period"
        | "payments,applied_payments,tracking_categories,contact"
        | "payments,applied_payments,tracking_categories,contact,accounting_period"
        | "payments,applied_payments,tracking_categories,contact,company"
        | "payments,applied_payments,tracking_categories,contact,company,accounting_period"
        | "payments,applied_payments,tracking_categories,purchase_orders"
        | "payments,applied_payments,tracking_categories,purchase_orders,accounting_period"
        | "payments,applied_payments,tracking_categories,purchase_orders,company"
        | "payments,applied_payments,tracking_categories,purchase_orders,company,accounting_period"
        | "payments,applied_payments,tracking_categories,purchase_orders,contact"
        | "payments,applied_payments,tracking_categories,purchase_orders,contact,accounting_period"
        | "payments,applied_payments,tracking_categories,purchase_orders,contact,company"
        | "payments,applied_payments,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "payments,company"
        | "payments,company,accounting_period"
        | "payments,contact"
        | "payments,contact,accounting_period"
        | "payments,contact,company"
        | "payments,contact,company,accounting_period"
        | "payments,line_items"
        | "payments,line_items,accounting_period"
        | "payments,line_items,company"
        | "payments,line_items,company,accounting_period"
        | "payments,line_items,contact"
        | "payments,line_items,contact,accounting_period"
        | "payments,line_items,contact,company"
        | "payments,line_items,contact,company,accounting_period"
        | "payments,line_items,purchase_orders"
        | "payments,line_items,purchase_orders,accounting_period"
        | "payments,line_items,purchase_orders,company"
        | "payments,line_items,purchase_orders,company,accounting_period"
        | "payments,line_items,purchase_orders,contact"
        | "payments,line_items,purchase_orders,contact,accounting_period"
        | "payments,line_items,purchase_orders,contact,company"
        | "payments,line_items,purchase_orders,contact,company,accounting_period"
        | "payments,line_items,tracking_categories"
        | "payments,line_items,tracking_categories,accounting_period"
        | "payments,line_items,tracking_categories,company"
        | "payments,line_items,tracking_categories,company,accounting_period"
        | "payments,line_items,tracking_categories,contact"
        | "payments,line_items,tracking_categories,contact,accounting_period"
        | "payments,line_items,tracking_categories,contact,company"
        | "payments,line_items,tracking_categories,contact,company,accounting_period"
        | "payments,line_items,tracking_categories,purchase_orders"
        | "payments,line_items,tracking_categories,purchase_orders,accounting_period"
        | "payments,line_items,tracking_categories,purchase_orders,company"
        | "payments,line_items,tracking_categories,purchase_orders,company,accounting_period"
        | "payments,line_items,tracking_categories,purchase_orders,contact"
        | "payments,line_items,tracking_categories,purchase_orders,contact,accounting_period"
        | "payments,line_items,tracking_categories,purchase_orders,contact,company"
        | "payments,line_items,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "payments,purchase_orders"
        | "payments,purchase_orders,accounting_period"
        | "payments,purchase_orders,company"
        | "payments,purchase_orders,company,accounting_period"
        | "payments,purchase_orders,contact"
        | "payments,purchase_orders,contact,accounting_period"
        | "payments,purchase_orders,contact,company"
        | "payments,purchase_orders,contact,company,accounting_period"
        | "payments,tracking_categories"
        | "payments,tracking_categories,accounting_period"
        | "payments,tracking_categories,company"
        | "payments,tracking_categories,company,accounting_period"
        | "payments,tracking_categories,contact"
        | "payments,tracking_categories,contact,accounting_period"
        | "payments,tracking_categories,contact,company"
        | "payments,tracking_categories,contact,company,accounting_period"
        | "payments,tracking_categories,purchase_orders"
        | "payments,tracking_categories,purchase_orders,accounting_period"
        | "payments,tracking_categories,purchase_orders,company"
        | "payments,tracking_categories,purchase_orders,company,accounting_period"
        | "payments,tracking_categories,purchase_orders,contact"
        | "payments,tracking_categories,purchase_orders,contact,accounting_period"
        | "payments,tracking_categories,purchase_orders,contact,company"
        | "payments,tracking_categories,purchase_orders,contact,company,accounting_period"
        | "purchase_orders"
        | "purchase_orders,accounting_period"
        | "purchase_orders,company"
        | "purchase_orders,company,accounting_period"
        | "purchase_orders,contact"
        | "purchase_orders,contact,accounting_period"
        | "purchase_orders,contact,company"
        | "purchase_orders,contact,company,accounting_period"
        | "tracking_categories"
        | "tracking_categories,accounting_period"
        | "tracking_categories,company"
        | "tracking_categories,company,accounting_period"
        | "tracking_categories,contact"
        | "tracking_categories,contact,accounting_period"
        | "tracking_categories,contact,company"
        | "tracking_categories,contact,company,accounting_period"
        | "tracking_categories,purchase_orders"
        | "tracking_categories,purchase_orders,accounting_period"
        | "tracking_categories,purchase_orders,company"
        | "tracking_categories,purchase_orders,company,accounting_period"
        | "tracking_categories,purchase_orders,contact"
        | "tracking_categories,purchase_orders,contact,accounting_period"
        | "tracking_categories,purchase_orders,contact,company"
        | "tracking_categories,purchase_orders,contact,company,accounting_period";
}
