/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const ItemPurchaseAccount: core.serialization.Schema<
    serializers.accounting.ItemPurchaseAccount.Raw,
    Merge.accounting.ItemPurchaseAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace ItemPurchaseAccount {
    export type Raw = string | Account.Raw;
}
