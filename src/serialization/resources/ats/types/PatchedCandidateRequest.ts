/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PhoneNumberRequest } from "./PhoneNumberRequest";
import { EmailAddressRequest } from "./EmailAddressRequest";
import { UrlRequest } from "./UrlRequest";

export const PatchedCandidateRequest: core.serialization.ObjectSchema<
    serializers.ats.PatchedCandidateRequest.Raw,
    Merge.ats.PatchedCandidateRequest
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    company: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    lastInteractionAt: core.serialization.property("last_interaction_at", core.serialization.date().optional()),
    isPrivate: core.serialization.property("is_private", core.serialization.boolean().optional()),
    canEmail: core.serialization.property("can_email", core.serialization.boolean().optional()),
    locations: core.serialization.list(core.serialization.string().optional()).optional(),
    phoneNumbers: core.serialization.property("phone_numbers", core.serialization.list(PhoneNumberRequest).optional()),
    emailAddresses: core.serialization.property(
        "email_addresses",
        core.serialization.list(EmailAddressRequest).optional()
    ),
    urls: core.serialization.list(UrlRequest).optional(),
    tags: core.serialization.list(core.serialization.string().optional()).optional(),
    applications: core.serialization.list(core.serialization.string().optional()).optional(),
    attachments: core.serialization.list(core.serialization.string().optional()).optional(),
    remoteTemplateId: core.serialization.property("remote_template_id", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace PatchedCandidateRequest {
    interface Raw {
        first_name?: string | null;
        last_name?: string | null;
        company?: string | null;
        title?: string | null;
        last_interaction_at?: string | null;
        is_private?: boolean | null;
        can_email?: boolean | null;
        locations?: (string | null | undefined)[] | null;
        phone_numbers?: PhoneNumberRequest.Raw[] | null;
        email_addresses?: EmailAddressRequest.Raw[] | null;
        urls?: UrlRequest.Raw[] | null;
        tags?: (string | null | undefined)[] | null;
        applications?: (string | null | undefined)[] | null;
        attachments?: (string | null | undefined)[] | null;
        remote_template_id?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
