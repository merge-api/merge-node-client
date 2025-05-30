/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CommentRequestUser } from "./CommentRequestUser";
import { CommentRequestContact } from "./CommentRequestContact";
import { CommentRequestTicket } from "./CommentRequestTicket";

export const CommentRequest: core.serialization.ObjectSchema<
    serializers.ticketing.CommentRequest.Raw,
    Merge.ticketing.CommentRequest
> = core.serialization.object({
    user: CommentRequestUser.optional(),
    contact: CommentRequestContact.optional(),
    body: core.serialization.string().optional(),
    htmlBody: core.serialization.property("html_body", core.serialization.string().optional()),
    ticket: CommentRequestTicket.optional(),
    isPrivate: core.serialization.property("is_private", core.serialization.boolean().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
});

export declare namespace CommentRequest {
    export interface Raw {
        user?: CommentRequestUser.Raw | null;
        contact?: CommentRequestContact.Raw | null;
        body?: string | null;
        html_body?: string | null;
        ticket?: CommentRequestTicket.Raw | null;
        is_private?: boolean | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
