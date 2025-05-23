/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `OPEN` - OPEN
 * * `CLOSED` - CLOSED
 * * `IN_PROGRESS` - IN_PROGRESS
 * * `ON_HOLD` - ON_HOLD
 */
export type TicketStatusEnum = "OPEN" | "CLOSED" | "IN_PROGRESS" | "ON_HOLD";
export const TicketStatusEnum = {
    Open: "OPEN",
    Closed: "CLOSED",
    InProgress: "IN_PROGRESS",
    OnHold: "ON_HOLD",
} as const;
