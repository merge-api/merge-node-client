/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedNoteList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedNoteList.Raw,
    Merge.crm.PaginatedNoteList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.Note))
        .optional(),
});

export declare namespace PaginatedNoteList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.crm.Note.Raw[] | null;
    }
}
