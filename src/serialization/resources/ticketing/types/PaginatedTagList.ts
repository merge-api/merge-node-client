/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedTagList: core.serialization.ObjectSchema<
    serializers.ticketing.PaginatedTagList.Raw,
    Merge.ticketing.PaginatedTagList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Tag))
        .optional(),
});

export declare namespace PaginatedTagList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ticketing.Tag.Raw[] | null;
    }
}
