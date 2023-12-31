/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OfferApplication: core.serialization.Schema<
    serializers.ats.OfferApplication.Raw,
    Merge.ats.OfferApplication
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ats.Application),
]);

export declare namespace OfferApplication {
    type Raw = string | serializers.ats.Application.Raw;
}
