/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { LeadOwner } from "./LeadOwner";
import { Address } from "./Address";
import { EmailAddress } from "./EmailAddress";
import { PhoneNumber } from "./PhoneNumber";
import { LeadConvertedContact } from "./LeadConvertedContact";
import { LeadConvertedAccount } from "./LeadConvertedAccount";
import { RemoteData } from "./RemoteData";
import { RemoteField } from "./RemoteField";

export const Lead: core.serialization.ObjectSchema<serializers.crm.Lead.Raw, Merge.crm.Lead> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        owner: LeadOwner.optional(),
        leadSource: core.serialization.property("lead_source", core.serialization.string().optional()),
        title: core.serialization.string().optional(),
        company: core.serialization.string().optional(),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        addresses: core.serialization.list(Address).optional(),
        emailAddresses: core.serialization.property(
            "email_addresses",
            core.serialization.list(EmailAddress).optional()
        ),
        phoneNumbers: core.serialization.property("phone_numbers", core.serialization.list(PhoneNumber).optional()),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        convertedDate: core.serialization.property("converted_date", core.serialization.date().optional()),
        convertedContact: core.serialization.property("converted_contact", LeadConvertedContact.optional()),
        convertedAccount: core.serialization.property("converted_account", LeadConvertedAccount.optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
        remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteField).optional()),
    });

export declare namespace Lead {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        owner?: LeadOwner.Raw | null;
        lead_source?: string | null;
        title?: string | null;
        company?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        addresses?: Address.Raw[] | null;
        email_addresses?: EmailAddress.Raw[] | null;
        phone_numbers?: PhoneNumber.Raw[] | null;
        remote_updated_at?: string | null;
        remote_created_at?: string | null;
        converted_date?: string | null;
        converted_contact?: LeadConvertedContact.Raw | null;
        converted_account?: LeadConvertedAccount.Raw | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
        remote_fields?: RemoteField.Raw[] | null;
    }
}
