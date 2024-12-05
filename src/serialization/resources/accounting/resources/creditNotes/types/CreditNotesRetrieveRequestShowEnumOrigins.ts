/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CreditNotesRetrieveRequestShowEnumOrigins: core.serialization.Schema<
    serializers.accounting.CreditNotesRetrieveRequestShowEnumOrigins.Raw,
    Merge.accounting.CreditNotesRetrieveRequestShowEnumOrigins
> = core.serialization.enum_(["status", "status,type", "type"]);

export declare namespace CreditNotesRetrieveRequestShowEnumOrigins {
    type Raw = "status" | "status,type" | "type";
}
