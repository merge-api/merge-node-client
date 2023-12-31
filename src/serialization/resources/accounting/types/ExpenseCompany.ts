/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseCompany: core.serialization.Schema<
    serializers.accounting.ExpenseCompany.Raw,
    Merge.accounting.ExpenseCompany
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.CompanyInfo),
]);

export declare namespace ExpenseCompany {
    type Raw = string | serializers.accounting.CompanyInfo.Raw;
}
