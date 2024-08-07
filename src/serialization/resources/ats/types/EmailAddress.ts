/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmailAddress: core.serialization.ObjectSchema<serializers.ats.EmailAddress.Raw, Merge.ats.EmailAddress> =
    core.serialization.object({
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        value: core.serialization.string().optional(),
        emailAddressType: core.serialization.property(
            "email_address_type",
            core.serialization.lazy(async () => (await import("../../..")).ats.EmailAddressEmailAddressType).optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    });

export declare namespace EmailAddress {
    interface Raw {
        created_at?: string | null;
        modified_at?: string | null;
        value?: string | null;
        email_address_type?: serializers.ats.EmailAddressEmailAddressType.Raw | null;
        remote_was_deleted?: boolean | null;
    }
}
