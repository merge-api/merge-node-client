/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountAccountTypeEnum } from "./AccountAccountTypeEnum";

export const AccountAccountType: core.serialization.Schema<
    serializers.accounting.AccountAccountType.Raw,
    Merge.accounting.AccountAccountType
> = core.serialization.undiscriminatedUnion([AccountAccountTypeEnum, core.serialization.string()]);

export declare namespace AccountAccountType {
    type Raw = AccountAccountTypeEnum.Raw | string;
}