/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const FieldMappingApiInstanceTargetField: core.serialization.ObjectSchema<
    serializers.accounting.FieldMappingApiInstanceTargetField.Raw,
    Merge.accounting.FieldMappingApiInstanceTargetField
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    isOrganizationWide: core.serialization.property("is_organization_wide", core.serialization.boolean()),
});

export declare namespace FieldMappingApiInstanceTargetField {
    interface Raw {
        name: string;
        description: string;
        is_organization_wide: boolean;
    }
}
