/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedAccountCurrency } from "./BankFeedAccountCurrency";
import { BankFeedAccountFeedStatus } from "./BankFeedAccountFeedStatus";
import { BankFeedAccountAccountType } from "./BankFeedAccountAccountType";

export const BankFeedAccount: core.serialization.ObjectSchema<
    serializers.accounting.BankFeedAccount.Raw,
    Merge.accounting.BankFeedAccount
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    sourceAccountId: core.serialization.property("source_account_id", core.serialization.string().optional()),
    targetAccountId: core.serialization.property("target_account_id", core.serialization.string().optional()),
    sourceAccountName: core.serialization.property("source_account_name", core.serialization.string().optional()),
    sourceAccountNumber: core.serialization.property("source_account_number", core.serialization.string().optional()),
    targetAccountName: core.serialization.property("target_account_name", core.serialization.string().optional()),
    currency: BankFeedAccountCurrency.optional(),
    feedStatus: core.serialization.property("feed_status", BankFeedAccountFeedStatus.optional()),
    feedStartDate: core.serialization.property("feed_start_date", core.serialization.date().optional()),
    sourceAccountBalance: core.serialization.property("source_account_balance", core.serialization.number().optional()),
    accountType: core.serialization.property("account_type", BankFeedAccountAccountType.optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional())
            .optional()
    ),
});

export declare namespace BankFeedAccount {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        source_account_id?: string | null;
        target_account_id?: string | null;
        source_account_name?: string | null;
        source_account_number?: string | null;
        target_account_name?: string | null;
        currency?: BankFeedAccountCurrency.Raw | null;
        feed_status?: BankFeedAccountFeedStatus.Raw | null;
        feed_start_date?: string | null;
        source_account_balance?: number | null;
        account_type?: BankFeedAccountAccountType.Raw | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: (Record<string, unknown> | null | undefined)[] | null;
    }
}