/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Address: core.serialization.ObjectSchema<serializers.accounting.Address.Raw, Merge.accounting.Address> =
    core.serialization.object({
        type: core.serialization.lazy(async () => (await import("../../..")).accounting.AddressType).optional(),
        street1: core.serialization.property("street_1", core.serialization.string().optional()),
        street2: core.serialization.property("street_2", core.serialization.string().optional()),
        city: core.serialization.string().optional(),
        state: core.serialization.unknown().optional(),
        countrySubdivision: core.serialization.property("country_subdivision", core.serialization.string().optional()),
        country: core.serialization.lazy(async () => (await import("../../..")).accounting.AddressCountry).optional(),
        zipCode: core.serialization.property("zip_code", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    });

export declare namespace Address {
    interface Raw {
        type?: serializers.accounting.AddressType.Raw | null;
        street_1?: string | null;
        street_2?: string | null;
        city?: string | null;
        state?: unknown | null;
        country_subdivision?: string | null;
        country?: serializers.accounting.AddressCountry.Raw | null;
        zip_code?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
    }
}
