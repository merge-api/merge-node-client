/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `QUEUED` - QUEUED
 * * `IN_PROGRESS` - IN_PROGRESS
 * * `COMPLETED` - COMPLETED
 * * `FAILURE` - FAILURE
 */
export type AsyncPostTaskStatusEnum = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILURE";
export const AsyncPostTaskStatusEnum = {
    Queued: "QUEUED",
    InProgress: "IN_PROGRESS",
    Completed: "COMPLETED",
    Failure: "FAILURE",
} as const;
