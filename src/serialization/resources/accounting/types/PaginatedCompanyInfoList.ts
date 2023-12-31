/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedCompanyInfoList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedCompanyInfoList.Raw,
    Merge.accounting.PaginatedCompanyInfoList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.CompanyInfo))
        .optional(),
});

export declare namespace PaginatedCompanyInfoList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.accounting.CompanyInfo.Raw[] | null;
    }
}
