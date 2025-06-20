/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Collection Object
 * ### Description
 * The `Collection` object is used to represent one or more `Tickets`. There can be a hierarchy of `Collections`, in which a sub-collection belongs to a parent-collection.
 *
 * ### Usage Example
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
     * The level of access a User has to the Collection and its sub-objects.
     *
     * * `PRIVATE` - PRIVATE
     * * `COMPANY` - COMPANY
     * * `PUBLIC` - PUBLIC
     * * `PARENT_COLLECTION` - PARENT_COLLECTION
     */
    accessLevel?: Merge.ticketing.CollectionAccessLevel;
    /**
     * The collection's type.
     *
     * * `LIST` - LIST
     * * `PROJECT` - PROJECT
     */
    collectionType?: Merge.ticketing.CollectionCollectionType;
    /** The parent collection for this collection. */
    parentCollection?: Merge.ticketing.CollectionParentCollection;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
