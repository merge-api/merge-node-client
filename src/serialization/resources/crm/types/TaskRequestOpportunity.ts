/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Opportunity } from "./Opportunity";

export const TaskRequestOpportunity: core.serialization.Schema<
    serializers.crm.TaskRequestOpportunity.Raw,
    Merge.crm.TaskRequestOpportunity
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Opportunity]);

export declare namespace TaskRequestOpportunity {
    export type Raw = string | Opportunity.Raw;
}
