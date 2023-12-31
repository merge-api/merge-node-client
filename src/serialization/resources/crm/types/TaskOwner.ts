/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaskOwner: core.serialization.Schema<serializers.crm.TaskOwner.Raw, Merge.crm.TaskOwner> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).crm.User),
    ]);

export declare namespace TaskOwner {
    type Raw = string | serializers.crm.User.Raw;
}
