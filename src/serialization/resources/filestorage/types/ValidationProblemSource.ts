/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ValidationProblemSource: core.serialization.ObjectSchema<
    serializers.filestorage.ValidationProblemSource.Raw,
    Merge.filestorage.ValidationProblemSource
> = core.serialization.object({
    pointer: core.serialization.string(),
});

export declare namespace ValidationProblemSource {
    interface Raw {
        pointer: string;
    }
}
