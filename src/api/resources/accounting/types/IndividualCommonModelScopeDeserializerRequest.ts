/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface IndividualCommonModelScopeDeserializerRequest {
    modelName: string;
    modelPermissions?: Record<string, Merge.accounting.ModelPermissionDeserializerRequest>;
    fieldPermissions?: Merge.accounting.FieldPermissionDeserializerRequest;
}
