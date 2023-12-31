/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOffStatus: core.serialization.Schema<serializers.hris.TimeOffStatus.Raw, Merge.hris.TimeOffStatus> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazy(async () => (await import("../../..")).hris.TimeOffStatusEnum),
        core.serialization.string(),
    ]);

export declare namespace TimeOffStatus {
    type Raw = serializers.hris.TimeOffStatusEnum.Raw | string;
}
