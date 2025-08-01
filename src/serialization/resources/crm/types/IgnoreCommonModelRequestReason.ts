/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ReasonEnum } from "./ReasonEnum";

export const IgnoreCommonModelRequestReason: core.serialization.Schema<
    serializers.crm.IgnoreCommonModelRequestReason.Raw,
    Merge.crm.IgnoreCommonModelRequestReason
> = core.serialization.undiscriminatedUnion([ReasonEnum, core.serialization.string()]);

export declare namespace IgnoreCommonModelRequestReason {
    export type Raw = ReasonEnum.Raw | string;
}
