/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const ContactRequestAccount: core.serialization.Schema<
    serializers.crm.ContactRequestAccount.Raw,
    Merge.crm.ContactRequestAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace ContactRequestAccount {
    export type Raw = string | Account.Raw;
}
