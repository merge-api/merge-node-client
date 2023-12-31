/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountRequestStatus: core.serialization.Schema<
    serializers.accounting.AccountRequestStatus.Raw,
    Merge.accounting.AccountRequestStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.AccountStatusEnum),
    core.serialization.string(),
]);

export declare namespace AccountRequestStatus {
    type Raw = serializers.accounting.AccountStatusEnum.Raw | string;
}
