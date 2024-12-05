/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountDetailsAndActions } from "./AccountDetailsAndActions";

export const PaginatedAccountDetailsAndActionsList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedAccountDetailsAndActionsList.Raw,
    Merge.crm.PaginatedAccountDetailsAndActionsList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(AccountDetailsAndActions).optional(),
});

export declare namespace PaginatedAccountDetailsAndActionsList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: AccountDetailsAndActions.Raw[] | null;
    }
}
