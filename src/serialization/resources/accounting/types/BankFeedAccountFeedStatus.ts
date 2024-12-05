/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { FeedStatusEnum } from "./FeedStatusEnum";

export const BankFeedAccountFeedStatus: core.serialization.Schema<
    serializers.accounting.BankFeedAccountFeedStatus.Raw,
    Merge.accounting.BankFeedAccountFeedStatus
> = core.serialization.undiscriminatedUnion([FeedStatusEnum, core.serialization.string()]);

export declare namespace BankFeedAccountFeedStatus {
    type Raw = FeedStatusEnum.Raw | string;
}
