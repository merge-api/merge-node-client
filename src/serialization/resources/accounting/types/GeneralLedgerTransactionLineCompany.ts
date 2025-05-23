/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyInfo } from "./CompanyInfo";

export const GeneralLedgerTransactionLineCompany: core.serialization.Schema<
    serializers.accounting.GeneralLedgerTransactionLineCompany.Raw,
    Merge.accounting.GeneralLedgerTransactionLineCompany
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CompanyInfo]);

export declare namespace GeneralLedgerTransactionLineCompany {
    export type Raw = string | CompanyInfo.Raw;
}
