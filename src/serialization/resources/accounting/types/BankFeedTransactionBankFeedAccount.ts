/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedAccount } from "./BankFeedAccount";

export const BankFeedTransactionBankFeedAccount: core.serialization.Schema<
    serializers.accounting.BankFeedTransactionBankFeedAccount.Raw,
    Merge.accounting.BankFeedTransactionBankFeedAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), BankFeedAccount]);

export declare namespace BankFeedTransactionBankFeedAccount {
    type Raw = string | BankFeedAccount.Raw;
}
