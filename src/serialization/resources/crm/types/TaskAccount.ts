/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaskAccount: core.serialization.Schema<serializers.crm.TaskAccount.Raw, Merge.crm.TaskAccount> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).crm.Account),
    ]);

export declare namespace TaskAccount {
    type Raw = string | serializers.crm.Account.Raw;
}
