/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ContactsRetrieveRequestExpand = "account" | "account,owner" | "owner";

export const ContactsRetrieveRequestExpand = {
    Account: "account",
    AccountOwner: "account,owner",
    Owner: "owner",
} as const;