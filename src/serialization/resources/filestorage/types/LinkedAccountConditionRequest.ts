/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountConditionRequest: core.serialization.ObjectSchema<
    serializers.filestorage.LinkedAccountConditionRequest.Raw,
    Merge.filestorage.LinkedAccountConditionRequest
> = core.serialization.object({
    id: core.serialization.string().optional(),
    conditionSchemaId: core.serialization.property("condition_schema_id", core.serialization.string()),
    operator: core.serialization.string(),
    value: core.serialization.unknown(),
});

export declare namespace LinkedAccountConditionRequest {
    interface Raw {
        id?: string | null;
        condition_schema_id: string;
        operator: string;
        value?: unknown;
    }
}
