/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             name: "Please add more integrations",
 *             dueDate: new Date("2022-10-11T00:00:00.000Z"),
 *             status: undefined,
 *             description: "Can you please add more integrations? It'll make syncing data much easier!",
 *             ticketType: "incident",
 *             account: "0958cbc6-6040-430a-848e-aafacbadf4ae",
 *             contact: "65c345ba-6870-4974-87ba-dd31509c367a",
 *             parentTicket: "75b33d04-30d2-4f3e-be45-27838bc94342",
 *             completedAt: new Date("2021-12-09T00:00:00.000Z"),
 *             ticketUrl: "https://thirdpartysoftware.com/project/3/issue/1",
 *             priority: undefined
 *         }
 *     }
 */
export interface PatchedTicketEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.ticketing.PatchedTicketRequest;
}
