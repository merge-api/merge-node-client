/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedDepartmentList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedDepartmentList.Raw,
    Merge.ats.PaginatedDepartmentList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.Department))
        .optional(),
});

export declare namespace PaginatedDepartmentList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ats.Department.Raw[] | null;
    }
}
