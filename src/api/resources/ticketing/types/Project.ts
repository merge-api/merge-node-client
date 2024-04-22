/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Project Object
 *
 * ### Description
 *
 * Please use the `Collection` model. This model will be fully deprecated on 3/30/2024.
 *
 * ### Usage Example
 *
 * TODO
 */
export interface Project {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    /** The project's name. */
    name?: string;
    /** The project's description. */
    description?: string;
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
