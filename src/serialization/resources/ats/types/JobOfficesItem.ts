/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JobOfficesItem: core.serialization.Schema<serializers.ats.JobOfficesItem.Raw, Merge.ats.JobOfficesItem> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).ats.Office),
    ]);

export declare namespace JobOfficesItem {
    type Raw = string | serializers.ats.Office.Raw;
}
