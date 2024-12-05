/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Stage } from "./Stage";

export const OpportunityStage: core.serialization.Schema<
    serializers.crm.OpportunityStage.Raw,
    Merge.crm.OpportunityStage
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Stage]);

export declare namespace OpportunityStage {
    type Raw = string | Stage.Raw;
}
