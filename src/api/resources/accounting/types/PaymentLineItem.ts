/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The PaymentLineItem Object
 *
 * ### Description
 *
 * The `PaymentLineItem` object is an applied-to-line on a `Payment` that can either be a `Invoice`, `CreditNote`, or `JournalEntry`.
 *
 * ### Usage Example
 *
 * `Payment` will have a field called `applied-to-lines` which will be an array of `PaymentLineItemInternalMappingSerializer` objects that can either be a `Invoice`, `CreditNote`, or `JournalEntry`.
 */
export interface PaymentLineItem {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    /** The amount being applied to the transaction. */
    appliedAmount?: string;
    /** The date the payment portion is applied. */
    appliedDate?: Date;
    /** The Merge ID of the transaction the payment portion is being applied to. */
    relatedObjectId?: string;
    /** The type of transaction the payment portion is being applied to. Possible values include: INVOICE, JOURNAL_ENTRY, or CREDIT_NOTE. */
    relatedObjectType?: string;
}
