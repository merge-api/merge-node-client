/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EngagementContactsItem: core.serialization.Schema<
    serializers.crm.EngagementContactsItem.Raw,
    Merge.crm.EngagementContactsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).crm.Contact),
]);

export declare namespace EngagementContactsItem {
    type Raw = string | serializers.crm.Contact.Raw;
}
