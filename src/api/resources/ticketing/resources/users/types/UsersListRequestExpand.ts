/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type UsersListRequestExpand = "roles" | "teams" | "teams,roles";
export const UsersListRequestExpand = {
    Roles: "roles",
    Teams: "teams",
    TeamsRoles: "teams,roles",
} as const;
