/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const PaginatedGroupList: core.serialization.ObjectSchema<
    serializers.filestorage.PaginatedGroupList.Raw,
    Merge.filestorage.PaginatedGroupList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(core.serialization.lazyObject(() => serializers.filestorage.Group)).optional(),
});

export declare namespace PaginatedGroupList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.filestorage.Group.Raw[] | null;
    }
}
