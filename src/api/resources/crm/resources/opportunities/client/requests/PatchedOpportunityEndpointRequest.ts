/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             name: "Needs Integrations",
 *             description: "Needs a Unified API for Integrations!",
 *             amount: 100000,
 *             owner: "0358cbc6-2040-430a-848e-aafacbadf3aa",
 *             account: "0958cbc6-6040-430a-848e-aafacbadf4ae",
 *             stage: "1968cbc6-6040-430a-848e-aafacbadf4ad",
 *             lastActivityAt: new Date("2022-02-10T00:00:00.000Z"),
 *             closeDate: new Date("2022-02-10T00:00:00.000Z")
 *         }
 *     }
 */
export interface PatchedOpportunityEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.crm.PatchedOpportunityRequest;
}
