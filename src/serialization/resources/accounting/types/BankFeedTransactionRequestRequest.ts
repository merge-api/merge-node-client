/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedTransactionRequestRequestBankFeedAccount } from "./BankFeedTransactionRequestRequestBankFeedAccount";
import { BankFeedTransactionRequestRequestCreditOrDebit } from "./BankFeedTransactionRequestRequestCreditOrDebit";

export const BankFeedTransactionRequestRequest: core.serialization.ObjectSchema<
    serializers.accounting.BankFeedTransactionRequestRequest.Raw,
    Merge.accounting.BankFeedTransactionRequestRequest
> = core.serialization.object({
    bankFeedAccount: core.serialization.property(
        "bank_feed_account",
        BankFeedTransactionRequestRequestBankFeedAccount.optional()
    ),
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    postedDate: core.serialization.property("posted_date", core.serialization.date().optional()),
    amount: core.serialization.number().optional(),
    description: core.serialization.string().optional(),
    transactionType: core.serialization.property("transaction_type", core.serialization.string().optional()),
    payee: core.serialization.string().optional(),
    creditOrDebit: core.serialization.property(
        "credit_or_debit",
        BankFeedTransactionRequestRequestCreditOrDebit.optional()
    ),
    sourceTransactionId: core.serialization.property("source_transaction_id", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace BankFeedTransactionRequestRequest {
    interface Raw {
        bank_feed_account?: BankFeedTransactionRequestRequestBankFeedAccount.Raw | null;
        transaction_date?: string | null;
        posted_date?: string | null;
        amount?: number | null;
        description?: string | null;
        transaction_type?: string | null;
        payee?: string | null;
        credit_or_debit?: BankFeedTransactionRequestRequestCreditOrDebit.Raw | null;
        source_transaction_id?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}