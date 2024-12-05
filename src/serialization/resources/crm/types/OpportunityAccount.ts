/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Account } from "./Account";

export const OpportunityAccount: core.serialization.Schema<
    serializers.crm.OpportunityAccount.Raw,
    Merge.crm.OpportunityAccount
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Account]);

export declare namespace OpportunityAccount {
    type Raw = string | Account.Raw;
}
