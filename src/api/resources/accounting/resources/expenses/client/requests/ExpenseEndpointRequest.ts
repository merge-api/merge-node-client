/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             totalAmount: 10000,
 *             currency: undefined,
 *             exchangeRate: "2.9",
 *             memo: "New employee supplies"
 *         }
 *     }
 */
export interface ExpenseEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.accounting.ExpenseRequest;
}
