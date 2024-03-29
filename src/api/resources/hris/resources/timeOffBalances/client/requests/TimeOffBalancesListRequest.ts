/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         expand: "employee",
 *         policyType: Merge.hris.TimeOffBalancesListRequestPolicyType.Bereavement,
 *         remoteFields: "policy_type",
 *         showEnumOrigins: "policy_type"
 *     }
 */
export interface TimeOffBalancesListRequest {
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: Date;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: Date;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return time off balances for this employee.
     */
    employeeId?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: "employee";
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
     *
     * - `VACATION` - VACATION
     * - `SICK` - SICK
     * - `PERSONAL` - PERSONAL
     * - `JURY_DUTY` - JURY_DUTY
     * - `VOLUNTEER` - VOLUNTEER
     * - `BEREAVEMENT` - BEREAVEMENT
     */
    policyType?: Merge.hris.TimeOffBalancesListRequestPolicyType;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: "policy_type";
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: "policy_type";
}
