/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AddressRequest: core.serialization.ObjectSchema<
    serializers.accounting.AddressRequest.Raw,
    Merge.accounting.AddressRequest
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).accounting.AddressRequestType).optional(),
    street1: core.serialization.property("street_1", core.serialization.string().optional()),
    street2: core.serialization.property("street_2", core.serialization.string().optional()),
    city: core.serialization.string().optional(),
    countrySubdivision: core.serialization.property("country_subdivision", core.serialization.string().optional()),
    country: core.serialization
        .lazy(async () => (await import("../../..")).accounting.AddressRequestCountry)
        .optional(),
    zipCode: core.serialization.property("zip_code", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AddressRequest {
    interface Raw {
        type?: serializers.accounting.AddressRequestType.Raw | null;
        street_1?: string | null;
        street_2?: string | null;
        city?: string | null;
        country_subdivision?: string | null;
        country?: serializers.accounting.AddressRequestCountry.Raw | null;
        zip_code?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
