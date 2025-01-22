/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionCurrencyEnum } from "./TransactionCurrencyEnum";

export const ExpenseCurrency: core.serialization.Schema<
    serializers.accounting.ExpenseCurrency.Raw,
    Merge.accounting.ExpenseCurrency
> = core.serialization.undiscriminatedUnion([TransactionCurrencyEnum, core.serialization.string()]);

export declare namespace ExpenseCurrency {
    type Raw = TransactionCurrencyEnum.Raw | string;
}
