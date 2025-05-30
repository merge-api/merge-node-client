/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountingPeriod } from "./AccountingPeriod";

export const InvoiceAccountingPeriod: core.serialization.Schema<
    serializers.accounting.InvoiceAccountingPeriod.Raw,
    Merge.accounting.InvoiceAccountingPeriod
> = core.serialization.undiscriminatedUnion([core.serialization.string(), AccountingPeriod]);

export declare namespace InvoiceAccountingPeriod {
    export type Raw = string | AccountingPeriod.Raw;
}
