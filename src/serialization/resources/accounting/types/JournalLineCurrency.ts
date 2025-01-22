/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionCurrencyEnum } from "./TransactionCurrencyEnum";

export const JournalLineCurrency: core.serialization.Schema<
    serializers.accounting.JournalLineCurrency.Raw,
    Merge.accounting.JournalLineCurrency
> = core.serialization.undiscriminatedUnion([TransactionCurrencyEnum, core.serialization.string()]);

export declare namespace JournalLineCurrency {
    type Raw = TransactionCurrencyEnum.Raw | string;
}
