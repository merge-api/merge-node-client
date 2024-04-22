/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Note Object
 *
 * ### Description
 *
 * The `Note` object is used to represent a note on another object.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Note {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    /** The note's owner. */
    owner?: Merge.crm.NoteOwner;
    /** The note's content. */
    content?: string;
    /** The note's contact. */
    contact?: Merge.crm.NoteContact;
    /** The note's account. */
    account?: Merge.crm.NoteAccount;
    /** The note's opportunity. */
    opportunity?: Merge.crm.NoteOpportunity;
    /** When the third party's lead was updated. */
    remoteUpdatedAt?: Date;
    /** When the third party's lead was created. */
    remoteCreatedAt?: Date;
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
