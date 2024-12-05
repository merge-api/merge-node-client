/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface LinkedAccountsListRequest {
    /**
     * Options: `accounting`, `ats`, `crm`, `filestorage`, `hris`, `mktg`, `ticketing`
     *
     * - `hris` - hris
     * - `ats` - ats
     * - `accounting` - accounting
     * - `ticketing` - ticketing
     * - `crm` - crm
     * - `mktg` - mktg
     * - `filestorage` - filestorage
     */
    category?: Merge.ats.LinkedAccountsListRequestCategory;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return linked accounts associated with the given email address.
     */
    endUserEmailAddress?: string;
    /**
     * If provided, will only return linked accounts associated with the given organization name.
     */
    endUserOrganizationName?: string;
    /**
     * If provided, will only return linked accounts associated with the given origin ID.
     */
    endUserOriginId?: string;
    /**
     * Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once.
     */
    endUserOriginIds?: string;
    id?: string;
    /**
     * Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once.
     */
    ids?: string;
    /**
     * If `true`, will include complete production duplicates of the account specified by the `id` query parameter in the response. `id` must be for a complete production linked account.
     */
    includeDuplicates?: boolean;
    /**
     * If provided, will only return linked accounts associated with the given integration name.
     */
    integrationName?: string;
    /**
     * If included, will only include test linked accounts. If not included, will only include non-test linked accounts.
     */
    isTestAccount?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Filter by status. Options: `COMPLETE`, `IDLE`, `INCOMPLETE`, `RELINK_NEEDED`
     */
    status?: string;
}
