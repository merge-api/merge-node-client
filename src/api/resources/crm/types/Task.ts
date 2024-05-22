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
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
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
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
