/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * The screening question associated with the candidate’s answer. To determine the data type of the answer, you can expand on the screening question by adding `screening_question_answers.question` to the `expand` query parameter.
 */
export type ScreeningQuestionAnswerQuestion = string | Merge.ats.ScreeningQuestion;
