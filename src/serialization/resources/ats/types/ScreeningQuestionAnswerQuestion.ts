/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScreeningQuestionAnswerQuestion: core.serialization.Schema<
    serializers.ats.ScreeningQuestionAnswerQuestion.Raw,
    Merge.ats.ScreeningQuestionAnswerQuestion
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.ScreeningQuestion),
]);

export declare namespace ScreeningQuestionAnswerQuestion {
    type Raw = string | serializers.ats.ScreeningQuestion.Raw;
}