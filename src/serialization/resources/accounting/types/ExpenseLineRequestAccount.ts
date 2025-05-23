/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const ExpenseLineRequestAccount: core.serialization.Schema<
    serializers.accounting.ExpenseLineRequestAccount.Raw,
    Merge.accounting.ExpenseLineRequestAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace ExpenseLineRequestAccount {
    export type Raw = string | Account.Raw;
}
