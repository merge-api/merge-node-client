/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { IndividualCommonModelScopeDeserializer } from "./IndividualCommonModelScopeDeserializer";

export const CommonModelScopeApi: core.serialization.ObjectSchema<
    serializers.hris.CommonModelScopeApi.Raw,
    Merge.hris.CommonModelScopeApi
> = core.serialization.object({
    commonModels: core.serialization.property(
        "common_models",
        core.serialization.list(IndividualCommonModelScopeDeserializer)
    ),
});

export declare namespace CommonModelScopeApi {
    interface Raw {
        common_models: IndividualCommonModelScopeDeserializer.Raw[];
    }
}
