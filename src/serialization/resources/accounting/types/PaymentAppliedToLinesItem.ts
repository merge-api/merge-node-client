/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentLineItem } from "./PaymentLineItem";

export const PaymentAppliedToLinesItem: core.serialization.Schema<
    serializers.accounting.PaymentAppliedToLinesItem.Raw,
    Merge.accounting.PaymentAppliedToLinesItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PaymentLineItem]);

export declare namespace PaymentAppliedToLinesItem {
    type Raw = string | PaymentLineItem.Raw;
}
