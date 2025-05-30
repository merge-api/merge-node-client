/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Association Object
 * ### Description
 * The `Association` record refers to an instance of an Association Type.
 * ### Usage Example
 * TODO
 */
export interface Association {
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    sourceObject?: string;
    targetObject?: string;
    /** The association type the association belongs to. */
    associationType?: Merge.crm.AssociationAssociationType;
}
