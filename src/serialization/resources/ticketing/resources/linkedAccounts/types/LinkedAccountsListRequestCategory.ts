/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const LinkedAccountsListRequestCategory: core.serialization.Schema<
    serializers.ticketing.LinkedAccountsListRequestCategory.Raw,
    Merge.ticketing.LinkedAccountsListRequestCategory
> = core.serialization.enum_(["accounting", "ats", "crm", "filestorage", "hris", "mktg", "ticketing"]);

export declare namespace LinkedAccountsListRequestCategory {
    type Raw = "accounting" | "ats" | "crm" | "filestorage" | "hris" | "mktg" | "ticketing";
}
