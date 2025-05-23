/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const PaginatedCreditNoteList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedCreditNoteList.Raw,
    Merge.accounting.PaginatedCreditNoteList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(core.serialization.lazyObject(() => serializers.accounting.CreditNote)).optional(),
});

export declare namespace PaginatedCreditNoteList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.accounting.CreditNote.Raw[] | null;
    }
}
