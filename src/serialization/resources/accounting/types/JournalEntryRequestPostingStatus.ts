/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PostingStatusEnum } from "./PostingStatusEnum";

export const JournalEntryRequestPostingStatus: core.serialization.Schema<
    serializers.accounting.JournalEntryRequestPostingStatus.Raw,
    Merge.accounting.JournalEntryRequestPostingStatus
> = core.serialization.undiscriminatedUnion([PostingStatusEnum, core.serialization.string()]);

export declare namespace JournalEntryRequestPostingStatus {
    type Raw = PostingStatusEnum.Raw | string;
}
