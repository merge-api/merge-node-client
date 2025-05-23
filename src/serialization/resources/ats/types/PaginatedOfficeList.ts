/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Office } from "./Office";

export const PaginatedOfficeList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedOfficeList.Raw,
    Merge.ats.PaginatedOfficeList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Office).optional(),
});

export declare namespace PaginatedOfficeList {
    export interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Office.Raw[] | null;
    }
}
