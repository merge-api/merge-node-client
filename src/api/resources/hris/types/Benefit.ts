/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Benefit Object
 *
 * ### Description
 *
 * The `Benefit` object is used to represent a benefit that an employee has enrolled in.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST Benefits` endpoint and filter by `ID` to show all benefits.
 */
export interface Benefit {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The employee on the plan. */
    employee?: Merge.hris.BenefitEmployee;
    /** The name of the benefit provider. */
    providerName?: string;
    /** The type of benefit plan */
    benefitPlanType?: string;
    /** The employee's contribution. */
    employeeContribution?: number;
    /** The company's contribution. */
    companyContribution?: number;
    /** The day and time the benefit started. */
    startDate?: Date;
    /** The day and time the benefit ended. */
    endDate?: Date;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    /** The employer benefit plan the employee is enrolled in. */
    employerBenefit?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
