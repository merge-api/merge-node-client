/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface IndividualCommonModelScopeDeserializer {
    modelName: string;
    modelPermissions?: Record<string, Merge.ticketing.ModelPermissionDeserializer>;
    fieldPermissions?: Merge.ticketing.FieldPermissionDeserializer;
}
