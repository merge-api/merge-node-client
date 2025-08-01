/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Project } from "./Project";

export const InvoiceLineItemProject: core.serialization.Schema<
    serializers.accounting.InvoiceLineItemProject.Raw,
    Merge.accounting.InvoiceLineItemProject
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Project]);

export declare namespace InvoiceLineItemProject {
    export type Raw = string | Project.Raw;
}
