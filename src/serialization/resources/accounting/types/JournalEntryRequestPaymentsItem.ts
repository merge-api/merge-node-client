/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Payment } from "./Payment";

export const JournalEntryRequestPaymentsItem: core.serialization.Schema<
    serializers.accounting.JournalEntryRequestPaymentsItem.Raw,
    Merge.accounting.JournalEntryRequestPaymentsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Payment]);

export declare namespace JournalEntryRequestPaymentsItem {
    export type Raw = string | Payment.Raw;
}
