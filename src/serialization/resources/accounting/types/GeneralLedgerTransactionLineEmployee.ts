/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Employee } from "./Employee";

export const GeneralLedgerTransactionLineEmployee: core.serialization.Schema<
    serializers.accounting.GeneralLedgerTransactionLineEmployee.Raw,
    Merge.accounting.GeneralLedgerTransactionLineEmployee
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Employee]);

export declare namespace GeneralLedgerTransactionLineEmployee {
    type Raw = string | Employee.Raw;
}
