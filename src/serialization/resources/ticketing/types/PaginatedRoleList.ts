/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedRoleList: core.serialization.ObjectSchema<
    serializers.ticketing.PaginatedRoleList.Raw,
    Merge.ticketing.PaginatedRoleList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Role))
        .optional(),
});

export declare namespace PaginatedRoleList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ticketing.Role.Raw[] | null;
    }
}
