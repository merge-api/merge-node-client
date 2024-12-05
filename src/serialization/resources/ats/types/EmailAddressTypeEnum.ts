/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const EmailAddressTypeEnum: core.serialization.Schema<
    serializers.ats.EmailAddressTypeEnum.Raw,
    Merge.ats.EmailAddressTypeEnum
> = core.serialization.enum_(["PERSONAL", "WORK", "OTHER"]);

export declare namespace EmailAddressTypeEnum {
    type Raw = "PERSONAL" | "WORK" | "OTHER";
}
