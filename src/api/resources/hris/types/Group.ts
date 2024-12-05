/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Group Object
 *
 * ### Description
 *
 * The `Group` object is used to represent any subset of employees across, for example, `DEPARTMENT` or `TEAM`. Employees can be in multiple Groups.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST Employee` endpoint and expand groups to view an employee's groups.
 */
export interface Group {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The parent group for this group. */
    parentGroup?: string;
    /** The group name. */
    name?: string;
    /**
     * The Group type returned directly from the third-party.
     *
     * - `TEAM` - TEAM
     * - `DEPARTMENT` - DEPARTMENT
     * - `COST_CENTER` - COST_CENTER
     * - `BUSINESS_UNIT` - BUSINESS_UNIT
     * - `GROUP` - GROUP
     */
    type?: Merge.hris.GroupType;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    /** Indicates whether the Group refers to a team in the third party platform. Note that this is an opinionated view based on how Merge observes most organizations representing teams in each third party platform. If your customer uses a platform different from most, there is a chance this will not be correct. */
    isCommonlyUsedAsTeam?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
