/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseRequestAccount: core.serialization.Schema<
    serializers.accounting.ExpenseRequestAccount.Raw,
    Merge.accounting.ExpenseRequestAccount
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Account),
]);

export declare namespace ExpenseRequestAccount {
    type Raw = string | serializers.accounting.Account.Raw;
}
