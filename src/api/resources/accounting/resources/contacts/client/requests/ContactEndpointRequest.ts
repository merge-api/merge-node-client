/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             name: "Gil Feig's Pickleball Team",
 *             isCustomer: true,
 *             emailAddress: "pickleball@merge.dev",
 *             taxNumber: "12-3456789",
 *             currency: "USD",
 *             company: "595c8f97-2ac4-45b7-b000-41bdf43240b5",
 *             phoneNumbers: [{
 *                     number: "+3198675309",
 *                     type: "Mobile"
 *                 }]
 *         }
 *     }
 */
export interface ContactEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.accounting.ContactRequest;
}
