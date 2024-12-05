/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The TrackingCategory Object
 *
 * ### Description
 *
 * A `TrackingCategory` object represents a categorization method used to classify transactions within an accounting platform. They are often used to group records for reporting and analysis purposes. The most common types of `TrackingCategories` are Classes and Departments.
 *
 * ### Usage Example
 *
 * Fetch from the `GET TrackingCategory` endpoint and view a company's tracking category.
 */
export interface TrackingCategory {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The tracking category's name. */
    name?: string;
    /**
     * The tracking category's status.
     *
     * - `ACTIVE` - ACTIVE
     * - `ARCHIVED` - ARCHIVED
     */
    status?: Merge.accounting.TrackingCategoryStatus;
    /**
     * The tracking category’s type.
     *
     * - `CLASS` - CLASS
     * - `DEPARTMENT` - DEPARTMENT
     */
    categoryType?: Merge.accounting.TrackingCategoryCategoryType;
    /** ID of the parent tracking category. */
    parentCategory?: string;
    /** The company the tracking category belongs to. */
    company?: Merge.accounting.TrackingCategoryCompany;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
