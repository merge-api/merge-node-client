/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Opportunity } from "./Opportunity";

export const NoteRequestOpportunity: core.serialization.Schema<
    serializers.crm.NoteRequestOpportunity.Raw,
    Merge.crm.NoteRequestOpportunity
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Opportunity]);

export declare namespace NoteRequestOpportunity {
    export type Raw = string | Opportunity.Raw;
}
