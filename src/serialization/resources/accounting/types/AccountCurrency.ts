/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyEnum } from "./CurrencyEnum";

export const AccountCurrency: core.serialization.Schema<
    serializers.accounting.AccountCurrency.Raw,
    Merge.accounting.AccountCurrency
> = core.serialization.undiscriminatedUnion([CurrencyEnum, core.serialization.string()]);

export declare namespace AccountCurrency {
    type Raw = CurrencyEnum.Raw | string;
}
