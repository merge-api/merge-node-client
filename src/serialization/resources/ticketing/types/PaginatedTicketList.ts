/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const PaginatedTicketList: core.serialization.ObjectSchema<
    serializers.ticketing.PaginatedTicketList.Raw,
    Merge.ticketing.PaginatedTicketList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(core.serialization.lazyObject(() => serializers.ticketing.Ticket)).optional(),
});

export declare namespace PaginatedTicketList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ticketing.Ticket.Raw[] | null;
    }
}
