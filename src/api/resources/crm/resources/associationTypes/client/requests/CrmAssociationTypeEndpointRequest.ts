/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             sourceObjectClass: {
 *                 id: "string",
 *                 originType: Merge.crm.OriginTypeEnum.CustomObject
 *             },
 *             targetObjectClasses: [],
 *             remoteKeyName: "string",
 *             cardinality: Merge.crm.CardinalityEnum.OneToOne
 *         }
 *     }
 */
export interface CrmAssociationTypeEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.crm.AssociationTypeRequestRequest;
}
