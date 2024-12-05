/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TrackingCategory } from "./TrackingCategory";

export const InvoiceRequestTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.InvoiceRequestTrackingCategoriesItem.Raw,
    Merge.accounting.InvoiceRequestTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), TrackingCategory]);

export declare namespace InvoiceRequestTrackingCategoriesItem {
    type Raw = string | TrackingCategory.Raw;
}
