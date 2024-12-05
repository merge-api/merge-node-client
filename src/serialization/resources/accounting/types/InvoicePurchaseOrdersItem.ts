/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PurchaseOrder } from "./PurchaseOrder";

export const InvoicePurchaseOrdersItem: core.serialization.Schema<
    serializers.accounting.InvoicePurchaseOrdersItem.Raw,
    Merge.accounting.InvoicePurchaseOrdersItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PurchaseOrder]);

export declare namespace InvoicePurchaseOrdersItem {
    type Raw = string | PurchaseOrder.Raw;
}
