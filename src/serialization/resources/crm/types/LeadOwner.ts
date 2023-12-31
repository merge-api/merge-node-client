/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LeadOwner: core.serialization.Schema<serializers.crm.LeadOwner.Raw, Merge.crm.LeadOwner> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).crm.User),
    ]);

export declare namespace LeadOwner {
    type Raw = string | serializers.crm.User.Raw;
}
