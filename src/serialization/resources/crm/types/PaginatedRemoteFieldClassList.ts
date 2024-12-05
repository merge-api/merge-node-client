/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldClass } from "./RemoteFieldClass";

export const PaginatedRemoteFieldClassList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedRemoteFieldClassList.Raw,
    Merge.crm.PaginatedRemoteFieldClassList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(RemoteFieldClass).optional(),
});

export declare namespace PaginatedRemoteFieldClassList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: RemoteFieldClass.Raw[] | null;
    }
}
