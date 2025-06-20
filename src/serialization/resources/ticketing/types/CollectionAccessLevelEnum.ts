/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const CollectionAccessLevelEnum: core.serialization.Schema<
    serializers.ticketing.CollectionAccessLevelEnum.Raw,
    Merge.ticketing.CollectionAccessLevelEnum
> = core.serialization.enum_(["PRIVATE", "COMPANY", "PUBLIC", "PARENT_COLLECTION"]);

export declare namespace CollectionAccessLevelEnum {
    export type Raw = "PRIVATE" | "COMPANY" | "PUBLIC" | "PARENT_COLLECTION";
}
