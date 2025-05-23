/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `string` - uuid
 * * `number` - url
 * * `date` - email
 * * `datetime` - phone
 * * `bool` - currency
 * * `list` - decimal
 */
export type ItemFormatEnum = "string" | "number" | "date" | "datetime" | "bool" | "list";
export const ItemFormatEnum = {
    String: "string",
    Number: "number",
    Date: "date",
    Datetime: "datetime",
    Bool: "bool",
    List: "list",
} as const;
