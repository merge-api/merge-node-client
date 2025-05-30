/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The PaymentMethod Object
 * ### Description
 * The `PaymentMethod` object defines how a payment against an invoice is made.
 *
 * ### Usage Example
 * Fetch from the `GET PaymentMethod` endpoint and view payment method information.
 */
export interface PaymentMethod {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /**
     * The type of the payment method.
     *
     * * `CREDIT_CARD` - CREDIT_CARD
     * * `DEBIT_CARD` - DEBIT_CARD
     * * `ACH` - ACH
     * * `CASH` - CASH
     * * `CHECK` - CHECK
     */
    methodType: Merge.accounting.PaymentMethodMethodType;
    /** The payment method’s name */
    name: string;
    /** `True` if the payment method is active, `False` if not. */
    isActive?: boolean;
    /** When the third party's payment method was updated. */
    remoteUpdatedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
