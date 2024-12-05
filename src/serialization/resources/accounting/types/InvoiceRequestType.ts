/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceTypeEnum } from "./InvoiceTypeEnum";

export const InvoiceRequestType: core.serialization.Schema<
    serializers.accounting.InvoiceRequestType.Raw,
    Merge.accounting.InvoiceRequestType
> = core.serialization.undiscriminatedUnion([InvoiceTypeEnum, core.serialization.string()]);

export declare namespace InvoiceRequestType {
    type Raw = InvoiceTypeEnum.Raw | string;
}
