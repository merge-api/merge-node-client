/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface IndividualCommonModelScopeDeserializer {
    modelName: string;
    modelPermissions?: Record<string, Merge.hris.ModelPermissionDeserializer>;
    fieldPermissions?: Merge.hris.FieldPermissionDeserializer;
}
