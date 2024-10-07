/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The PayGroup Object
 *
 * ### Description
 *
 * The `PayGroup` object is used to represent a subset of employees that are put together for payroll processing purposes.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST PayGroup` endpoint and filter by `ID` to show all pay group information.
 */
export interface PayGroup {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The pay group name. */
    payGroupName?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
