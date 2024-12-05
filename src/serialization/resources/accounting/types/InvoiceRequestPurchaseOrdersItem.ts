/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PurchaseOrder } from "./PurchaseOrder";

export const InvoiceRequestPurchaseOrdersItem: core.serialization.Schema<
    serializers.accounting.InvoiceRequestPurchaseOrdersItem.Raw,
    Merge.accounting.InvoiceRequestPurchaseOrdersItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PurchaseOrder]);

export declare namespace InvoiceRequestPurchaseOrdersItem {
    type Raw = string | PurchaseOrder.Raw;
}
