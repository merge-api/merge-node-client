/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankFeedAccount } from "./BankFeedAccount";

export const PaginatedBankFeedAccountList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedBankFeedAccountList.Raw,
    Merge.accounting.PaginatedBankFeedAccountList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(BankFeedAccount).optional(),
});

export declare namespace PaginatedBankFeedAccountList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: BankFeedAccount.Raw[] | null;
    }
}