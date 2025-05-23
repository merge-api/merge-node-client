/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const InvoiceLineItemAccount: core.serialization.Schema<
    serializers.accounting.InvoiceLineItemAccount.Raw,
    Merge.accounting.InvoiceLineItemAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace InvoiceLineItemAccount {
    export type Raw = string | Account.Raw;
}
