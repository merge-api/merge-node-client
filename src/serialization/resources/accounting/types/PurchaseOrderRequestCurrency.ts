/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyEnum } from "./CurrencyEnum";

export const PurchaseOrderRequestCurrency: core.serialization.Schema<
    serializers.accounting.PurchaseOrderRequestCurrency.Raw,
    Merge.accounting.PurchaseOrderRequestCurrency
> = core.serialization.undiscriminatedUnion([CurrencyEnum, core.serialization.string()]);

export declare namespace PurchaseOrderRequestCurrency {
    type Raw = CurrencyEnum.Raw | string;
}
