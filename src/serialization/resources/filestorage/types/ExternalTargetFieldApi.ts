/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ExternalTargetFieldApi: core.serialization.ObjectSchema<
    serializers.filestorage.ExternalTargetFieldApi.Raw,
    Merge.filestorage.ExternalTargetFieldApi
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    isMapped: core.serialization.property("is_mapped", core.serialization.string().optional()),
});

export declare namespace ExternalTargetFieldApi {
    interface Raw {
        name?: string | null;
        description?: string | null;
        is_mapped?: string | null;
    }
}
