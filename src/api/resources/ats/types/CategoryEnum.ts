/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `hris` - hris
 * - `ats` - ats
 * - `accounting` - accounting
 * - `ticketing` - ticketing
 * - `crm` - crm
 * - `mktg` - mktg
 * - `filestorage` - filestorage
 */
export type CategoryEnum = "hris" | "ats" | "accounting" | "ticketing" | "crm" | "mktg" | "filestorage";

export const CategoryEnum = {
    Hris: "hris",
    Ats: "ats",
    Accounting: "accounting",
    Ticketing: "ticketing",
    Crm: "crm",
    Mktg: "mktg",
    Filestorage: "filestorage",
} as const;
