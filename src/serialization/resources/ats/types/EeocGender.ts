/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EeocGender: core.serialization.Schema<serializers.ats.EeocGender.Raw, Merge.ats.EeocGender> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazy(async () => (await import("../../..")).ats.GenderEnum),
        core.serialization.string(),
    ]);

export declare namespace EeocGender {
    type Raw = serializers.ats.GenderEnum.Raw | string;
}
