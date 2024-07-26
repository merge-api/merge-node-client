/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketingContactResponse: core.serialization.ObjectSchema<
    serializers.ticketing.TicketingContactResponse.Raw,
    Merge.ticketing.TicketingContactResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Contact),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ticketing.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ticketing.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.DebugModeLog))
        .optional(),
});

export declare namespace TicketingContactResponse {
    interface Raw {
        model: serializers.ticketing.Contact.Raw;
        warnings: serializers.ticketing.WarningValidationProblem.Raw[];
        errors: serializers.ticketing.ErrorValidationProblem.Raw[];
        logs?: serializers.ticketing.DebugModeLog.Raw[] | null;
    }
}