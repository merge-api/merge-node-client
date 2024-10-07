/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Collection Object
 *
 * ### Description
 *
 * The `Collection` object is used to represent collections of tickets. Collections may include other collections as
 * sub collections.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Collection {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The collection's name. */
    name?: string;
    /** The collection's description. */
    description?: string;
    /**
     * The collection's type.
     *
     * - `LIST` - LIST
     * - `PROJECT` - PROJECT
     */
    collectionType?: Merge.ticketing.CollectionCollectionType;
    /** The parent collection for this collection. */
    parentCollection?: Merge.ticketing.CollectionParentCollection;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    /**
     * The level of access a User has to the Collection and its sub-objects.
     *
     * - `PRIVATE` - PRIVATE
     * - `COMPANY` - COMPANY
     * - `PUBLIC` - PUBLIC
     */
    accessLevel?: Merge.ticketing.CollectionAccessLevel;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
