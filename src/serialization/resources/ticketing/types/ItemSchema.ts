/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ItemSchema: core.serialization.ObjectSchema<
    serializers.ticketing.ItemSchema.Raw,
    Merge.ticketing.ItemSchema
> = core.serialization.object({
    itemType: core.serialization.property(
        "item_type",
        core.serialization.lazy(async () => (await import("../../..")).ticketing.ItemTypeEnum).optional()
    ),
    itemFormat: core.serialization.property(
        "item_format",
        core.serialization.lazy(async () => (await import("../../..")).ticketing.ItemFormatEnum).optional()
    ),
    itemChoices: core.serialization.property(
        "item_choices",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace ItemSchema {
    interface Raw {
        item_type?: serializers.ticketing.ItemTypeEnum.Raw | null;
        item_format?: serializers.ticketing.ItemFormatEnum.Raw | null;
        item_choices?: string[] | null;
    }
}
