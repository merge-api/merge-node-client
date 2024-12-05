/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Attachment } from "./Attachment";

export const CandidateAttachmentsItem: core.serialization.Schema<
    serializers.ats.CandidateAttachmentsItem.Raw,
    Merge.ats.CandidateAttachmentsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Attachment]);

export declare namespace CandidateAttachmentsItem {
    type Raw = string | Attachment.Raw;
}
