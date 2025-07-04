/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountDetailsAndActionsStatusEnum } from "./AccountDetailsAndActionsStatusEnum";

export const AccountDetailsAndActionsStatus: core.serialization.Schema<
    serializers.ats.AccountDetailsAndActionsStatus.Raw,
    Merge.ats.AccountDetailsAndActionsStatus
> = core.serialization.undiscriminatedUnion([AccountDetailsAndActionsStatusEnum, core.serialization.string()]);

export declare namespace AccountDetailsAndActionsStatus {
    export type Raw = AccountDetailsAndActionsStatusEnum.Raw | string;
}
