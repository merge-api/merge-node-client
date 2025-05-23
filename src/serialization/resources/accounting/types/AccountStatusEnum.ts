/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AccountStatusEnum: core.serialization.Schema<
    serializers.accounting.AccountStatusEnum.Raw,
    Merge.accounting.AccountStatusEnum
> = core.serialization.enum_(["ACTIVE", "PENDING", "INACTIVE"]);

export declare namespace AccountStatusEnum {
    export type Raw = "ACTIVE" | "PENDING" | "INACTIVE";
}
