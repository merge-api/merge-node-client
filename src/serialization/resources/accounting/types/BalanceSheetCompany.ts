/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const BalanceSheetCompany: core.serialization.Schema<
    serializers.accounting.BalanceSheetCompany.Raw,
    Merge.accounting.BalanceSheetCompany
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.CompanyInfo),
]);

export declare namespace BalanceSheetCompany {
    type Raw = string | serializers.accounting.CompanyInfo.Raw;
}
