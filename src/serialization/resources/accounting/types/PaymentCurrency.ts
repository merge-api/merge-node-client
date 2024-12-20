/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyEnum } from "./CurrencyEnum";

export const PaymentCurrency: core.serialization.Schema<
    serializers.accounting.PaymentCurrency.Raw,
    Merge.accounting.PaymentCurrency
> = core.serialization.undiscriminatedUnion([CurrencyEnum, core.serialization.string()]);

export declare namespace PaymentCurrency {
    type Raw = CurrencyEnum.Raw | string;
}
