/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             content: "Call for negotiation",
 *             subject: "Call from customer",
 *             direction: undefined,
 *             startTime: new Date("2022-02-10T00:00:00.000Z"),
 *             endTime: new Date("2022-02-10T00:05:00.000Z")
 *         }
 *     }
 */
export interface EngagementEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.crm.EngagementRequest;
}
