/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CollectionsUsersListRequestExpand = "roles" | "teams" | "teams,roles";

export const CollectionsUsersListRequestExpand = {
    Roles: "roles",
    Teams: "teams",
    TeamsRoles: "teams,roles",
} as const;
