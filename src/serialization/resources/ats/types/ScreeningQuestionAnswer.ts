/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ScreeningQuestionAnswerQuestion } from "./ScreeningQuestionAnswerQuestion";

export const ScreeningQuestionAnswer: core.serialization.ObjectSchema<
    serializers.ats.ScreeningQuestionAnswer.Raw,
    Merge.ats.ScreeningQuestionAnswer
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    question: ScreeningQuestionAnswerQuestion.optional(),
    answer: core.serialization.string().optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
});

export declare namespace ScreeningQuestionAnswer {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        question?: ScreeningQuestionAnswerQuestion.Raw | null;
        answer?: string | null;
        remote_was_deleted?: boolean | null;
    }
}
