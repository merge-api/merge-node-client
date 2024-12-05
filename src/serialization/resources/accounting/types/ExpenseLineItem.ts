/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Item } from "./Item";

export const ExpenseLineItem: core.serialization.Schema<
    serializers.accounting.ExpenseLineItem.Raw,
    Merge.accounting.ExpenseLineItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Item]);

export declare namespace ExpenseLineItem {
    type Raw = string | Item.Raw;
}
