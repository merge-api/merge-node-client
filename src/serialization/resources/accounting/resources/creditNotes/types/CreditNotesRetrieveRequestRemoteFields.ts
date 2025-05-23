/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CreditNotesRetrieveRequestRemoteFields: core.serialization.Schema<
    serializers.accounting.CreditNotesRetrieveRequestRemoteFields.Raw,
    Merge.accounting.CreditNotesRetrieveRequestRemoteFields
> = core.serialization.enum_(["status", "status,type", "type"]);

export declare namespace CreditNotesRetrieveRequestRemoteFields {
    export type Raw = "status" | "status,type" | "type";
}
