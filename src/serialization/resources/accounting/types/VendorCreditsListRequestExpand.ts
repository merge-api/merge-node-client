/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const VendorCreditsListRequestExpand: core.serialization.Schema<
    serializers.accounting.VendorCreditsListRequestExpand.Raw,
    Merge.accounting.VendorCreditsListRequestExpand
> = core.serialization.enum_([
    "accounting_period",
    "company",
    "company,accounting_period",
    "lines",
    "lines,accounting_period",
    "lines,company",
    "lines,company,accounting_period",
    "lines,tracking_categories",
    "lines,tracking_categories,accounting_period",
    "lines,tracking_categories,company",
    "lines,tracking_categories,company,accounting_period",
    "lines,tracking_categories,vendor",
    "lines,tracking_categories,vendor,accounting_period",
    "lines,tracking_categories,vendor,company",
    "lines,tracking_categories,vendor,company,accounting_period",
    "lines,vendor",
    "lines,vendor,accounting_period",
    "lines,vendor,company",
    "lines,vendor,company,accounting_period",
    "tracking_categories",
    "tracking_categories,accounting_period",
    "tracking_categories,company",
    "tracking_categories,company,accounting_period",
    "tracking_categories,vendor",
    "tracking_categories,vendor,accounting_period",
    "tracking_categories,vendor,company",
    "tracking_categories,vendor,company,accounting_period",
    "vendor",
    "vendor,accounting_period",
    "vendor,company",
    "vendor,company,accounting_period",
]);

export declare namespace VendorCreditsListRequestExpand {
    type Raw =
        | "accounting_period"
        | "company"
        | "company,accounting_period"
        | "lines"
        | "lines,accounting_period"
        | "lines,company"
        | "lines,company,accounting_period"
        | "lines,tracking_categories"
        | "lines,tracking_categories,accounting_period"
        | "lines,tracking_categories,company"
        | "lines,tracking_categories,company,accounting_period"
        | "lines,tracking_categories,vendor"
        | "lines,tracking_categories,vendor,accounting_period"
        | "lines,tracking_categories,vendor,company"
        | "lines,tracking_categories,vendor,company,accounting_period"
        | "lines,vendor"
        | "lines,vendor,accounting_period"
        | "lines,vendor,company"
        | "lines,vendor,company,accounting_period"
        | "tracking_categories"
        | "tracking_categories,accounting_period"
        | "tracking_categories,company"
        | "tracking_categories,company,accounting_period"
        | "tracking_categories,vendor"
        | "tracking_categories,vendor,accounting_period"
        | "tracking_categories,vendor,company"
        | "tracking_categories,vendor,company,accounting_period"
        | "vendor"
        | "vendor,accounting_period"
        | "vendor,company"
        | "vendor,company,accounting_period";
}
