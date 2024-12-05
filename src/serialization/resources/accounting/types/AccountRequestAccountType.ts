/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountAccountTypeEnum } from "./AccountAccountTypeEnum";

export const AccountRequestAccountType: core.serialization.Schema<
    serializers.accounting.AccountRequestAccountType.Raw,
    Merge.accounting.AccountRequestAccountType
> = core.serialization.undiscriminatedUnion([AccountAccountTypeEnum, core.serialization.string()]);

export declare namespace AccountRequestAccountType {
    type Raw = AccountAccountTypeEnum.Raw | string;
}