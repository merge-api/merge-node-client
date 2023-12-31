/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountSelectiveSyncConfiguration: core.serialization.ObjectSchema<
    serializers.filestorage.LinkedAccountSelectiveSyncConfiguration.Raw,
    Merge.filestorage.LinkedAccountSelectiveSyncConfiguration
> = core.serialization.object({
    linkedAccountConditions: core.serialization.property(
        "linked_account_conditions",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).filestorage.LinkedAccountCondition)
            )
            .optional()
    ),
});

export declare namespace LinkedAccountSelectiveSyncConfiguration {
    interface Raw {
        linked_account_conditions?: serializers.filestorage.LinkedAccountCondition.Raw[] | null;
    }
}
