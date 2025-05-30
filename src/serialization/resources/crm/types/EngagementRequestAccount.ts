/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const EngagementRequestAccount: core.serialization.Schema<
    serializers.crm.EngagementRequestAccount.Raw,
    Merge.crm.EngagementRequestAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace EngagementRequestAccount {
    export type Raw = string | Account.Raw;
}
