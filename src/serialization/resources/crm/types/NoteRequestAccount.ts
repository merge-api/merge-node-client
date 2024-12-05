/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const NoteRequestAccount: core.serialization.Schema<
    serializers.crm.NoteRequestAccount.Raw,
    Merge.crm.NoteRequestAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace NoteRequestAccount {
    type Raw = string | Account.Raw;
}
