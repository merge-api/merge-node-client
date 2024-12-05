/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CreditOrDebitEnum } from "./CreditOrDebitEnum";

export const BankFeedTransactionRequestRequestCreditOrDebit: core.serialization.Schema<
    serializers.accounting.BankFeedTransactionRequestRequestCreditOrDebit.Raw,
    Merge.accounting.BankFeedTransactionRequestRequestCreditOrDebit
> = core.serialization.undiscriminatedUnion([CreditOrDebitEnum, core.serialization.string()]);

export declare namespace BankFeedTransactionRequestRequestCreditOrDebit {
    type Raw = CreditOrDebitEnum.Raw | string;
}