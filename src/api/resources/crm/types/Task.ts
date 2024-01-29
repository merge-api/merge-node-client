/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Task Object
 *
 * ### Description
 *
 * The `Task` object is used to represent a task, such as a to-do item.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Task {
    /** The task's subject. */
    subject?: string;
    /** The task's content. */
    content?: string;
    /** The task's owner. */
    owner?: Merge.crm.TaskOwner;
    /** The task's account. */
    account?: Merge.crm.TaskAccount;
    /** The task's opportunity. */
    opportunity?: Merge.crm.TaskOpportunity;
    /** When the task is completed. */
    completedDate?: Date;
    /** When the task is due. */
    dueDate?: Date;
    /**
     * The task's status.
     *
     * - `OPEN` - OPEN
     * - `CLOSED` - CLOSED
     */
    status?: Merge.crm.TaskStatus;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
