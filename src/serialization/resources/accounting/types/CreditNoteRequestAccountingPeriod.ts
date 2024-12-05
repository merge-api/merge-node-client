/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountingPeriod } from "./AccountingPeriod";

export const CreditNoteRequestAccountingPeriod: core.serialization.Schema<
    serializers.accounting.CreditNoteRequestAccountingPeriod.Raw,
    Merge.accounting.CreditNoteRequestAccountingPeriod
> = core.serialization.undiscriminatedUnion([core.serialization.string(), AccountingPeriod]);

export declare namespace CreditNoteRequestAccountingPeriod {
    type Raw = string | AccountingPeriod.Raw;
}