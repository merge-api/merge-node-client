/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The Offer Object
 * ### Description
 * The `Offer` object is used to represent an offer for a candidate's application specific to a job.
 * ### Usage Example
 * Fetch from the `LIST Offers` endpoint and filter by `ID` to show all offers.
 */
export interface Offer {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The application who is receiving the offer. */
    application?: Merge.ats.OfferApplication;
    /** The user who created the offer. */
    creator?: Merge.ats.OfferCreator;
    /** When the third party's offer was created. */
    remoteCreatedAt?: Date;
    /** When the offer was closed. */
    closedAt?: Date;
    /** When the offer was sent. */
    sentAt?: Date;
    /** The employment start date on the offer. */
    startDate?: Date;
    /**
     * The offer's status.
     *
     * * `DRAFT` - DRAFT
     * * `APPROVAL-SENT` - APPROVAL-SENT
     * * `APPROVED` - APPROVED
     * * `SENT` - SENT
     * * `SENT-MANUALLY` - SENT-MANUALLY
     * * `OPENED` - OPENED
     * * `DENIED` - DENIED
     * * `SIGNED` - SIGNED
     * * `DEPRECATED` - DEPRECATED
     */
    status?: Merge.ats.OfferStatus;
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
