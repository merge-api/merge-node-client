/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryRequestPostingStatus: core.serialization.Schema<
    serializers.accounting.JournalEntryRequestPostingStatus.Raw,
    Merge.accounting.JournalEntryRequestPostingStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.PostingStatusEnum),
    core.serialization.string(),
]);

export declare namespace JournalEntryRequestPostingStatus {
    type Raw = serializers.accounting.PostingStatusEnum.Raw | string;
}
