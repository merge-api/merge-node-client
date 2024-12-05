/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountingPeriodStatusEnum } from "./AccountingPeriodStatusEnum";

export const AccountingPeriodStatus: core.serialization.Schema<
    serializers.accounting.AccountingPeriodStatus.Raw,
    Merge.accounting.AccountingPeriodStatus
> = core.serialization.undiscriminatedUnion([AccountingPeriodStatusEnum, core.serialization.string()]);

export declare namespace AccountingPeriodStatus {
    type Raw = AccountingPeriodStatusEnum.Raw | string;
}
