/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ApplicationRequestOffersItem: core.serialization.Schema<
    serializers.ats.ApplicationRequestOffersItem.Raw,
    Merge.ats.ApplicationRequestOffersItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Offer),
]);

export declare namespace ApplicationRequestOffersItem {
    type Raw = string | serializers.ats.Offer.Raw;
}
