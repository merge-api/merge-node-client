/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldApi } from "./RemoteFieldApi";

export const RemoteFieldApiResponse: core.serialization.ObjectSchema<
    serializers.ticketing.RemoteFieldApiResponse.Raw,
    Merge.ticketing.RemoteFieldApiResponse
> = core.serialization.object({
    ticket: core.serialization.property("Ticket", core.serialization.list(RemoteFieldApi).optional()),
    comment: core.serialization.property("Comment", core.serialization.list(RemoteFieldApi).optional()),
    project: core.serialization.property("Project", core.serialization.list(RemoteFieldApi).optional()),
    collection: core.serialization.property("Collection", core.serialization.list(RemoteFieldApi).optional()),
    user: core.serialization.property("User", core.serialization.list(RemoteFieldApi).optional()),
    role: core.serialization.property("Role", core.serialization.list(RemoteFieldApi).optional()),
    account: core.serialization.property("Account", core.serialization.list(RemoteFieldApi).optional()),
    team: core.serialization.property("Team", core.serialization.list(RemoteFieldApi).optional()),
    attachment: core.serialization.property("Attachment", core.serialization.list(RemoteFieldApi).optional()),
    tag: core.serialization.property("Tag", core.serialization.list(RemoteFieldApi).optional()),
    contact: core.serialization.property("Contact", core.serialization.list(RemoteFieldApi).optional()),
});

export declare namespace RemoteFieldApiResponse {
    interface Raw {
        Ticket?: RemoteFieldApi.Raw[] | null;
        Comment?: RemoteFieldApi.Raw[] | null;
        Project?: RemoteFieldApi.Raw[] | null;
        Collection?: RemoteFieldApi.Raw[] | null;
        User?: RemoteFieldApi.Raw[] | null;
        Role?: RemoteFieldApi.Raw[] | null;
        Account?: RemoteFieldApi.Raw[] | null;
        Team?: RemoteFieldApi.Raw[] | null;
        Attachment?: RemoteFieldApi.Raw[] | null;
        Tag?: RemoteFieldApi.Raw[] | null;
        Contact?: RemoteFieldApi.Raw[] | null;
    }
}
