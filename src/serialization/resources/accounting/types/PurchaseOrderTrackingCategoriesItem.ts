/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TrackingCategory } from "./TrackingCategory";

export const PurchaseOrderTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.PurchaseOrderTrackingCategoriesItem.Raw,
    Merge.accounting.PurchaseOrderTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), TrackingCategory]);

export declare namespace PurchaseOrderTrackingCategoriesItem {
    export type Raw = string | TrackingCategory.Raw;
}
