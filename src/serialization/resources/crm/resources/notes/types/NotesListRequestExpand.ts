/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const NotesListRequestExpand: core.serialization.Schema<
    serializers.crm.NotesListRequestExpand.Raw,
    Merge.crm.NotesListRequestExpand
> = core.serialization.enum_([
    "account",
    "account,opportunity",
    "contact",
    "contact,account",
    "contact,account,opportunity",
    "contact,opportunity",
    "opportunity",
    "owner",
    "owner,account",
    "owner,account,opportunity",
    "owner,contact",
    "owner,contact,account",
    "owner,contact,account,opportunity",
    "owner,contact,opportunity",
    "owner,opportunity",
]);

export declare namespace NotesListRequestExpand {
    type Raw =
        | "account"
        | "account,opportunity"
        | "contact"
        | "contact,account"
        | "contact,account,opportunity"
        | "contact,opportunity"
        | "opportunity"
        | "owner"
        | "owner,account"
        | "owner,account,opportunity"
        | "owner,contact"
        | "owner,contact,account"
        | "owner,contact,account,opportunity"
        | "owner,contact,opportunity"
        | "owner,opportunity";
}
