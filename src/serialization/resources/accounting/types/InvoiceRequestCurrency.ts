/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionCurrencyEnum } from "./TransactionCurrencyEnum";

export const InvoiceRequestCurrency: core.serialization.Schema<
    serializers.accounting.InvoiceRequestCurrency.Raw,
    Merge.accounting.InvoiceRequestCurrency
> = core.serialization.undiscriminatedUnion([TransactionCurrencyEnum, core.serialization.string()]);

export declare namespace InvoiceRequestCurrency {
    export type Raw = TransactionCurrencyEnum.Raw | string;
}
