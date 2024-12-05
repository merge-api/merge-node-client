/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PatchedContactRequestOwner } from "./PatchedContactRequestOwner";
import { AddressRequest } from "./AddressRequest";
import { EmailAddressRequest } from "./EmailAddressRequest";
import { PhoneNumberRequest } from "./PhoneNumberRequest";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const PatchedContactRequest: core.serialization.ObjectSchema<
    serializers.crm.PatchedContactRequest.Raw,
    Merge.crm.PatchedContactRequest
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    account: core.serialization.string().optional(),
    owner: PatchedContactRequestOwner.optional(),
    addresses: core.serialization.list(AddressRequest).optional(),
    emailAddresses: core.serialization.property(
        "email_addresses",
        core.serialization.list(EmailAddressRequest).optional()
    ),
    phoneNumbers: core.serialization.property("phone_numbers", core.serialization.list(PhoneNumberRequest).optional()),
    lastActivityAt: core.serialization.property("last_activity_at", core.serialization.date().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteFieldRequest).optional()),
});

export declare namespace PatchedContactRequest {
    interface Raw {
        first_name?: string | null;
        last_name?: string | null;
        account?: string | null;
        owner?: PatchedContactRequestOwner.Raw | null;
        addresses?: AddressRequest.Raw[] | null;
        email_addresses?: EmailAddressRequest.Raw[] | null;
        phone_numbers?: PhoneNumberRequest.Raw[] | null;
        last_activity_at?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
