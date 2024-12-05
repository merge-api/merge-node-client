/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Role } from "./Role";

export const PaginatedRoleList: core.serialization.ObjectSchema<
    serializers.ticketing.PaginatedRoleList.Raw,
    Merge.ticketing.PaginatedRoleList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(Role).optional(),
});

export declare namespace PaginatedRoleList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: Role.Raw[] | null;
    }
}
