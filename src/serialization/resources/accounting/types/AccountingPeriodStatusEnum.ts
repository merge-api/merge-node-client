/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AccountingPeriodStatusEnum: core.serialization.Schema<
    serializers.accounting.AccountingPeriodStatusEnum.Raw,
    Merge.accounting.AccountingPeriodStatusEnum
> = core.serialization.enum_(["ACTIVE", "INACTIVE"]);

export declare namespace AccountingPeriodStatusEnum {
    type Raw = "ACTIVE" | "INACTIVE";
}
