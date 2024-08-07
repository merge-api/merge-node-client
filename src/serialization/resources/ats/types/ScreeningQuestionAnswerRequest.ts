/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScreeningQuestionAnswerRequest: core.serialization.ObjectSchema<
    serializers.ats.ScreeningQuestionAnswerRequest.Raw,
    Merge.ats.ScreeningQuestionAnswerRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    question: core.serialization
        .lazy(async () => (await import("../../..")).ats.ScreeningQuestionAnswerRequestQuestion)
        .optional(),
    answer: core.serialization.string().optional(),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace ScreeningQuestionAnswerRequest {
    interface Raw {
        remote_id?: string | null;
        question?: serializers.ats.ScreeningQuestionAnswerRequestQuestion.Raw | null;
        answer?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
