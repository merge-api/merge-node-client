/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const LanguageEnum: core.serialization.Schema<
    serializers.ticketing.LanguageEnum.Raw,
    Merge.ticketing.LanguageEnum
> = core.serialization.enum_(["en", "de"]);

export declare namespace LanguageEnum {
    type Raw = "en" | "de";
}
