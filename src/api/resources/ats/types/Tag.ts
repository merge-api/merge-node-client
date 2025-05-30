/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The Tag Object
 * ### Description
 * The `Tag` object is used to represent a tag for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Tags` endpoint and view the tags used within a company.
 */
export interface Tag {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The tag's name. */
    name?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
