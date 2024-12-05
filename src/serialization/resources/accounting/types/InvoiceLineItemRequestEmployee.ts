/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const InvoiceLineItemRequestEmployee: core.serialization.Schema<
    serializers.accounting.InvoiceLineItemRequestEmployee.Raw,
    Merge.accounting.InvoiceLineItemRequestEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace InvoiceLineItemRequestEmployee {
    type Raw = string | Employee.Raw;
}