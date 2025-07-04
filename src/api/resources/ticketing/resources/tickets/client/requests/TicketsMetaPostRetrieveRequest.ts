/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface TicketsMetaPostRetrieveRequest {
    /**
     * If provided, will only return tickets for this collection.
     */
    collectionId?: string;
    /**
     * If provided, will only return tickets for this ticket type.
     */
    ticketType?: string;
}
