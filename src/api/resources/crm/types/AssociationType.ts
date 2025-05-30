/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The AssociationType Object
 * ### Description
 * The `Association Type` object represents the relationship between two objects.
 * ### Usage Example
 * TODO
 */
export interface AssociationType {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The class of the source object (Custom Object or Common Model) for the association type. */
    sourceObjectClass?: Record<string, unknown>;
    targetObjectClasses?: Merge.crm.AssociationSubType[];
    remoteKeyName?: string;
    displayName?: string;
    cardinality?: Merge.crm.AssociationTypeCardinality;
    isRequired?: boolean;
}
