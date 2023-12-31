/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaskRequestAccount: core.serialization.Schema<
    serializers.crm.TaskRequestAccount.Raw,
    Merge.crm.TaskRequestAccount
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).crm.Account),
]);

export declare namespace TaskRequestAccount {
    type Raw = string | serializers.crm.Account.Raw;
}
