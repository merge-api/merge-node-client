/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         commonModels: [{
 *                 modelName: "model_name"
 *             }]
 *     }
 */
export interface LinkedAccountCommonModelScopeDeserializerRequest {
    /** The common models you want to update the scopes for */
    commonModels: Merge.filestorage.IndividualCommonModelScopeDeserializerRequest[];
}
