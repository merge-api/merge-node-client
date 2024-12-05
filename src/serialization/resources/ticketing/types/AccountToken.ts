/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccountIntegration } from "./AccountIntegration";

export const AccountToken: core.serialization.ObjectSchema<
    serializers.ticketing.AccountToken.Raw,
    Merge.ticketing.AccountToken
> = core.serialization.object({
    accountToken: core.serialization.property("account_token", core.serialization.string()),
    integration: AccountIntegration,
});

export declare namespace AccountToken {
    interface Raw {
        account_token: string;
        integration: AccountIntegration.Raw;
    }
}
