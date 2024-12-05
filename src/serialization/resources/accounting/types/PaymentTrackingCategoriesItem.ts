/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TrackingCategory } from "./TrackingCategory";

export const PaymentTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.PaymentTrackingCategoriesItem.Raw,
    Merge.accounting.PaymentTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), TrackingCategory]);

export declare namespace PaymentTrackingCategoriesItem {
    type Raw = string | TrackingCategory.Raw;
}
