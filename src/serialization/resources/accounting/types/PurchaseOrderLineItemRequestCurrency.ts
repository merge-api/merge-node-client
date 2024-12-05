/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyEnum } from "./CurrencyEnum";

export const PurchaseOrderLineItemRequestCurrency: core.serialization.Schema<
    serializers.accounting.PurchaseOrderLineItemRequestCurrency.Raw,
    Merge.accounting.PurchaseOrderLineItemRequestCurrency
> = core.serialization.undiscriminatedUnion([CurrencyEnum, core.serialization.string()]);

export declare namespace PurchaseOrderLineItemRequestCurrency {
    type Raw = CurrencyEnum.Raw | string;
}
