/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CollectionsListRequestExpand = "parent_collection" | "teams" | "teams,parent_collection";

export const CollectionsListRequestExpand = {
    ParentCollection: "parent_collection",
    Teams: "teams",
    TeamsParentCollection: "teams,parent_collection",
} as const;
