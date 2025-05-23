/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const OpportunityStatusEnum: core.serialization.Schema<
    serializers.crm.OpportunityStatusEnum.Raw,
    Merge.crm.OpportunityStatusEnum
> = core.serialization.enum_(["OPEN", "WON", "LOST"]);

export declare namespace OpportunityStatusEnum {
    export type Raw = "OPEN" | "WON" | "LOST";
}
