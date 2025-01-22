/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../../index";

/**
 * @example
 *     {
 *         commonModels: [{
 *                 modelName: "Employee",
 *                 modelPermissions: {
 *                     "READ": {
 *                         isEnabled: true
 *                     },
 *                     "WRITE": {
 *                         isEnabled: false
 *                     }
 *                 },
 *                 fieldPermissions: {
 *                     enabledFields: ["avatar", "home_location"],
 *                     disabledFields: ["work_location"]
 *                 }
 *             }, {
 *                 modelName: "Benefit",
 *                 modelPermissions: {
 *                     "WRITE": {
 *                         isEnabled: false
 *                     }
 *                 }
 *             }]
 *     }
 */
export interface LinkedAccountCommonModelScopeDeserializerRequest {
    /** The common models you want to update the scopes for */
    commonModels: Merge.ticketing.IndividualCommonModelScopeDeserializerRequest[];
}
