/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ApplicationOffersItem: core.serialization.Schema<
    serializers.ats.ApplicationOffersItem.Raw,
    Merge.ats.ApplicationOffersItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(() => serializers.ats.Offer),
]);

export declare namespace ApplicationOffersItem {
    type Raw = string | serializers.ats.Offer.Raw;
}
