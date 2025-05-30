/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentLineItem } from "./PaymentLineItem";

export const CreditNoteAppliedPaymentsItem: core.serialization.Schema<
    serializers.accounting.CreditNoteAppliedPaymentsItem.Raw,
    Merge.accounting.CreditNoteAppliedPaymentsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PaymentLineItem]);

export declare namespace CreditNoteAppliedPaymentsItem {
    export type Raw = string | PaymentLineItem.Raw;
}
