/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TrackingCategory } from "./TrackingCategory";

export const ExpenseLineRequestTrackingCategory: core.serialization.Schema<
    serializers.accounting.ExpenseLineRequestTrackingCategory.Raw,
    Merge.accounting.ExpenseLineRequestTrackingCategory
> = core.serialization.undiscriminatedUnion([core.serialization.string(), TrackingCategory]);

export declare namespace ExpenseLineRequestTrackingCategory {
    type Raw = string | TrackingCategory.Raw;
}
