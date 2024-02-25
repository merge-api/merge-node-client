/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AdvancedMetadata: core.serialization.ObjectSchema<
    serializers.ats.AdvancedMetadata.Raw,
    Merge.ats.AdvancedMetadata
> = core.serialization.object({
    id: core.serialization.string(),
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
    isCustom: core.serialization.property("is_custom", core.serialization.boolean().optional()),
    fieldChoices: core.serialization.property(
        "field_choices",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
});

export declare namespace AdvancedMetadata {
    interface Raw {
        id: string;
        display_name?: string | null;
        description?: string | null;
        is_required?: boolean | null;
        is_custom?: boolean | null;
        field_choices?: unknown[] | null;
    }
}
