/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Note Object
 * ### Description
 * The `Note` object is used to represent a note on another object.
 * ### Usage Example
 * TODO
 */
export interface NoteRequest {
    /** The note's owner. */
    owner?: Merge.crm.NoteRequestOwner;
    /** The note's content. */
    content?: string;
    /** The note's contact. */
    contact?: Merge.crm.NoteRequestContact;
    /** The note's account. */
    account?: Merge.crm.NoteRequestAccount;
    /** The note's opportunity. */
    opportunity?: Merge.crm.NoteRequestOpportunity;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.crm.RemoteFieldRequest[];
}
