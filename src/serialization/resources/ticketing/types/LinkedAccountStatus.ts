/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const LinkedAccountStatus: core.serialization.ObjectSchema<
    serializers.ticketing.LinkedAccountStatus.Raw,
    Merge.ticketing.LinkedAccountStatus
> = core.serialization.object({
    linkedAccountStatus: core.serialization.property("linked_account_status", core.serialization.string()),
    canMakeRequest: core.serialization.property("can_make_request", core.serialization.boolean()),
});

export declare namespace LinkedAccountStatus {
    interface Raw {
        linked_account_status: string;
        can_make_request: boolean;
    }
}
