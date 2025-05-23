/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentLineItem } from "./PaymentLineItem";

export const InvoiceAppliedPaymentsItem: core.serialization.Schema<
    serializers.accounting.InvoiceAppliedPaymentsItem.Raw,
    Merge.accounting.InvoiceAppliedPaymentsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PaymentLineItem]);

export declare namespace InvoiceAppliedPaymentsItem {
    export type Raw = string | PaymentLineItem.Raw;
}
