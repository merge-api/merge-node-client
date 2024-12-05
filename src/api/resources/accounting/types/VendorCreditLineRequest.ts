/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The VendorCreditLine Object
 *
 * ### Description
 *
 * The `VendorCreditLine` object is used to represent a vendor credit's line items.
 *
 * ### Usage Example
 *
 * Fetch from the `GET VendorCredit` endpoint and view the vendor credit's line items.
 */
export interface VendorCreditLineRequest {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The full value of the credit. */
    netAmount?: number;
    /** The line's associated tracking category. */
    trackingCategory?: string;
    /** The vendor credit line item's associated tracking categories. */
    trackingCategories?: (string | undefined)[];
    /** The line's description. */
    description?: string;
    /** The line's account. */
    account?: Merge.accounting.VendorCreditLineRequestAccount;
    /** The company the line belongs to. */
    company?: string;
    /** The tax rate that applies to this line item. */
    taxRate?: string;
    /** The vendor credit line item's exchange rate. */
    exchangeRate?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}