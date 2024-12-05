/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Contact } from "./Contact";

export const PaginatedContactList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedContactList.Raw,
    Merge.crm.PaginatedContactList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Contact).optional(),
});

export declare namespace PaginatedContactList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Contact.Raw[] | null;
    }
}
