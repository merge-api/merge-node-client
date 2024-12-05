/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The BankInfo Object
 *
 * ### Description
 *
 * The `BankInfo` object is used to represent the Bank Account information for an Employee.
 *
 * ### Usage Example
 *
 * Fetch from the `LIST BankInfo` endpoint and filter by `ID` to show all bank information.
 */
export interface BankInfo {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The employee with this bank account. */
    employee?: Merge.hris.BankInfoEmployee;
    /** The account number. */
    accountNumber?: string;
    /** The routing number. */
    routingNumber?: string;
    /** The bank name. */
    bankName?: string;
    /**
     * The bank account type
     *
     * - `SAVINGS` - SAVINGS
     * - `CHECKING` - CHECKING
     */
    accountType?: Merge.hris.BankInfoAccountType;
    /** When the matching bank object was created in the third party system. */
    remoteCreatedAt?: Date;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
