/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedAccountRequestCurrency } from "./BankFeedAccountRequestCurrency";
import { BankFeedAccountRequestFeedStatus } from "./BankFeedAccountRequestFeedStatus";
import { BankFeedAccountRequestAccountType } from "./BankFeedAccountRequestAccountType";

export const BankFeedAccountRequest: core.serialization.ObjectSchema<
    serializers.accounting.BankFeedAccountRequest.Raw,
    Merge.accounting.BankFeedAccountRequest
> = core.serialization.object({
    sourceAccountId: core.serialization.property("source_account_id", core.serialization.string().optional()),
    targetAccountId: core.serialization.property("target_account_id", core.serialization.string().optional()),
    sourceAccountName: core.serialization.property("source_account_name", core.serialization.string().optional()),
    sourceAccountNumber: core.serialization.property("source_account_number", core.serialization.string().optional()),
    targetAccountName: core.serialization.property("target_account_name", core.serialization.string().optional()),
    currency: BankFeedAccountRequestCurrency.optional(),
    feedStatus: core.serialization.property("feed_status", BankFeedAccountRequestFeedStatus.optional()),
    feedStartDate: core.serialization.property("feed_start_date", core.serialization.date().optional()),
    sourceAccountBalance: core.serialization.property("source_account_balance", core.serialization.number().optional()),
    accountType: core.serialization.property("account_type", BankFeedAccountRequestAccountType.optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
});

export declare namespace BankFeedAccountRequest {
    export interface Raw {
        source_account_id?: string | null;
        target_account_id?: string | null;
        source_account_name?: string | null;
        source_account_number?: string | null;
        target_account_name?: string | null;
        currency?: BankFeedAccountRequestCurrency.Raw | null;
        feed_status?: BankFeedAccountRequestFeedStatus.Raw | null;
        feed_start_date?: string | null;
        source_account_balance?: number | null;
        account_type?: BankFeedAccountRequestAccountType.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
