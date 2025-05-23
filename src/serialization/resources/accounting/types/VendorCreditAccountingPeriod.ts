/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountingPeriod } from "./AccountingPeriod";

export const VendorCreditAccountingPeriod: core.serialization.Schema<
    serializers.accounting.VendorCreditAccountingPeriod.Raw,
    Merge.accounting.VendorCreditAccountingPeriod
> = core.serialization.undiscriminatedUnion([core.serialization.string(), AccountingPeriod]);

export declare namespace VendorCreditAccountingPeriod {
    export type Raw = string | AccountingPeriod.Raw;
}
