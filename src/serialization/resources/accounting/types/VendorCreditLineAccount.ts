/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const VendorCreditLineAccount: core.serialization.Schema<
    serializers.accounting.VendorCreditLineAccount.Raw,
    Merge.accounting.VendorCreditLineAccount
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Account),
]);

export declare namespace VendorCreditLineAccount {
    type Raw = string | serializers.accounting.Account.Raw;
}
