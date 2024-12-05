/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const EngagementAccount: core.serialization.Schema<
    serializers.crm.EngagementAccount.Raw,
    Merge.crm.EngagementAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace EngagementAccount {
    type Raw = string | Account.Raw;
}
