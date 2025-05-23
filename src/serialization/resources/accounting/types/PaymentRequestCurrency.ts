/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionCurrencyEnum } from "./TransactionCurrencyEnum";

export const PaymentRequestCurrency: core.serialization.Schema<
    serializers.accounting.PaymentRequestCurrency.Raw,
    Merge.accounting.PaymentRequestCurrency
> = core.serialization.undiscriminatedUnion([TransactionCurrencyEnum, core.serialization.string()]);

export declare namespace PaymentRequestCurrency {
    export type Raw = TransactionCurrencyEnum.Raw | string;
}
