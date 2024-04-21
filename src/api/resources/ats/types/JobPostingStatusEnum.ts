/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `PUBLISHED` - PUBLISHED
 * - `CLOSED` - CLOSED
 * - `DRAFT` - DRAFT
 * - `INTERNAL` - INTERNAL
 * - `PENDING` - PENDING
 */
export type JobPostingStatusEnum = "PUBLISHED" | "CLOSED" | "DRAFT" | "INTERNAL" | "PENDING";

export const JobPostingStatusEnum = {
    Published: "PUBLISHED",
    Closed: "CLOSED",
    Draft: "DRAFT",
    Internal: "INTERNAL",
    Pending: "PENDING",
} as const;
