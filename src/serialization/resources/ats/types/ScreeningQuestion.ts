/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScreeningQuestion: core.serialization.ObjectSchema<
    serializers.ats.ScreeningQuestion.Raw,
    Merge.ats.ScreeningQuestion
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    job: core.serialization.lazy(async () => (await import("../../..")).ats.ScreeningQuestionJob).optional(),
    description: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).ats.ScreeningQuestionType).optional(),
    required: core.serialization.boolean().optional(),
    options: core.serialization.list(core.serialization.unknown()).optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace ScreeningQuestion {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        job?: serializers.ats.ScreeningQuestionJob.Raw | null;
        description?: string | null;
        title?: string | null;
        type?: serializers.ats.ScreeningQuestionType.Raw | null;
        required?: boolean | null;
        options?: unknown[] | null;
        created_at?: string | null;
        modified_at?: string | null;
    }
}
