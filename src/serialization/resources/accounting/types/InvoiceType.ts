/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceTypeEnum } from "./InvoiceTypeEnum";

export const InvoiceType: core.serialization.Schema<
    serializers.accounting.InvoiceType.Raw,
    Merge.accounting.InvoiceType
> = core.serialization.undiscriminatedUnion([InvoiceTypeEnum, core.serialization.string()]);

export declare namespace InvoiceType {
    type Raw = InvoiceTypeEnum.Raw | string;
}
