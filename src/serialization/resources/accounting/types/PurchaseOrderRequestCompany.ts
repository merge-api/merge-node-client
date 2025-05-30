/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyInfo } from "./CompanyInfo";

export const PurchaseOrderRequestCompany: core.serialization.Schema<
    serializers.accounting.PurchaseOrderRequestCompany.Raw,
    Merge.accounting.PurchaseOrderRequestCompany
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CompanyInfo]);

export declare namespace PurchaseOrderRequestCompany {
    export type Raw = string | CompanyInfo.Raw;
}
