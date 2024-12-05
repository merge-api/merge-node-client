/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { LinkedAccountStatus } from "./LinkedAccountStatus";

export const MetaResponse: core.serialization.ObjectSchema<
    serializers.filestorage.MetaResponse.Raw,
    Merge.filestorage.MetaResponse
> = core.serialization.object({
    requestSchema: core.serialization.property(
        "request_schema",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
    remoteFieldClasses: core.serialization.property(
        "remote_field_classes",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    status: LinkedAccountStatus.optional(),
    hasConditionalParams: core.serialization.property("has_conditional_params", core.serialization.boolean()),
    hasRequiredLinkedAccountParams: core.serialization.property(
        "has_required_linked_account_params",
        core.serialization.boolean()
    ),
});

export declare namespace MetaResponse {
    interface Raw {
        request_schema: Record<string, unknown>;
        remote_field_classes?: Record<string, unknown> | null;
        status?: LinkedAccountStatus.Raw | null;
        has_conditional_params: boolean;
        has_required_linked_account_params: boolean;
    }
}
