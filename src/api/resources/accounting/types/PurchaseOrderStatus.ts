/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * The purchase order's status.
 *
 * - `DRAFT` - DRAFT
 * - `SUBMITTED` - SUBMITTED
 * - `AUTHORIZED` - AUTHORIZED
 * - `BILLED` - BILLED
 * - `DELETED` - DELETED
 */
export type PurchaseOrderStatus = Merge.accounting.PurchaseOrderStatusEnum | string;
