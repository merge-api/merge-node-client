/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { UnderlyingTransactionTypeEnum } from "./UnderlyingTransactionTypeEnum";

export const GeneralLedgerTransactionUnderlyingTransactionType: core.serialization.Schema<
    serializers.accounting.GeneralLedgerTransactionUnderlyingTransactionType.Raw,
    Merge.accounting.GeneralLedgerTransactionUnderlyingTransactionType
> = core.serialization.undiscriminatedUnion([UnderlyingTransactionTypeEnum, core.serialization.string()]);

export declare namespace GeneralLedgerTransactionUnderlyingTransactionType {
    type Raw = UnderlyingTransactionTypeEnum.Raw | string;
}
