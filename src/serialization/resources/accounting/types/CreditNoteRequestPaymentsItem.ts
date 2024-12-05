/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Payment } from "./Payment";

export const CreditNoteRequestPaymentsItem: core.serialization.Schema<
    serializers.accounting.CreditNoteRequestPaymentsItem.Raw,
    Merge.accounting.CreditNoteRequestPaymentsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Payment]);

export declare namespace CreditNoteRequestPaymentsItem {
    type Raw = string | Payment.Raw;
}
