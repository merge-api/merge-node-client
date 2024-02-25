/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const LinkedAccountCommonModelScopeDeserializerRequest: core.serialization.Schema<
    serializers.ticketing.LinkedAccountCommonModelScopeDeserializerRequest.Raw,
    Merge.ticketing.LinkedAccountCommonModelScopeDeserializerRequest
> = core.serialization.object({
    commonModels: core.serialization.property(
        "common_models",
        core.serialization.list(
            core.serialization.lazyObject(
                async () => (await import("../../../../../..")).ticketing.IndividualCommonModelScopeDeserializerRequest
            )
        )
    ),
});

export declare namespace LinkedAccountCommonModelScopeDeserializerRequest {
    interface Raw {
        common_models: serializers.ticketing.IndividualCommonModelScopeDeserializerRequest.Raw[];
    }
}