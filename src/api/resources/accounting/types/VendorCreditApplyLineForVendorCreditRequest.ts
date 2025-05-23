/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The VendorCreditApplyLine Object
 * ### Description
 * The `VendorCreditApplyLine` object is used to represent a applied vendor credit.
 *
 * ### Usage Example
 * Fetch from the `GET VendorCredit` endpoint and view the vendor credit's applied to lines.
 */
export interface VendorCreditApplyLineForVendorCreditRequest {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    invoice?: Merge.accounting.VendorCreditApplyLineForVendorCreditRequestInvoice;
    /** Date that the vendor credit is applied to the invoice. */
    appliedDate?: Date;
    /** The amount of the VendorCredit applied to the invoice. */
    appliedAmount?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
