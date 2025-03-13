/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PurchaseOrderRequestStatus } from "./PurchaseOrderRequestStatus";
import { PurchaseOrderRequestDeliveryAddress } from "./PurchaseOrderRequestDeliveryAddress";
import { PurchaseOrderRequestVendor } from "./PurchaseOrderRequestVendor";
import { PurchaseOrderRequestCompany } from "./PurchaseOrderRequestCompany";
import { PurchaseOrderRequestPaymentTerm } from "./PurchaseOrderRequestPaymentTerm";
import { PurchaseOrderRequestCurrency } from "./PurchaseOrderRequestCurrency";
import { PurchaseOrderRequestTrackingCategoriesItem } from "./PurchaseOrderRequestTrackingCategoriesItem";
import { PurchaseOrderLineItemRequest } from "./PurchaseOrderLineItemRequest";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const PurchaseOrderRequest: core.serialization.ObjectSchema<
    serializers.accounting.PurchaseOrderRequest.Raw,
    Merge.accounting.PurchaseOrderRequest
> = core.serialization.object({
    status: PurchaseOrderRequestStatus.optional(),
    issueDate: core.serialization.property("issue_date", core.serialization.date().optional()),
    deliveryDate: core.serialization.property("delivery_date", core.serialization.date().optional()),
    deliveryAddress: core.serialization.property("delivery_address", PurchaseOrderRequestDeliveryAddress.optional()),
    customer: core.serialization.string().optional(),
    vendor: PurchaseOrderRequestVendor.optional(),
    memo: core.serialization.string().optional(),
    company: PurchaseOrderRequestCompany.optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    paymentTerm: core.serialization.property("payment_term", PurchaseOrderRequestPaymentTerm.optional()),
    currency: PurchaseOrderRequestCurrency.optional(),
    inclusiveOfTax: core.serialization.property("inclusive_of_tax", core.serialization.boolean().optional()),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(PurchaseOrderRequestTrackingCategoriesItem.optional()).optional()
    ),
    lineItems: core.serialization.property(
        "line_items",
        core.serialization.list(PurchaseOrderLineItemRequest).optional()
    ),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteFieldRequest).optional()),
});

export declare namespace PurchaseOrderRequest {
    interface Raw {
        status?: PurchaseOrderRequestStatus.Raw | null;
        issue_date?: string | null;
        delivery_date?: string | null;
        delivery_address?: PurchaseOrderRequestDeliveryAddress.Raw | null;
        customer?: string | null;
        vendor?: PurchaseOrderRequestVendor.Raw | null;
        memo?: string | null;
        company?: PurchaseOrderRequestCompany.Raw | null;
        total_amount?: number | null;
        payment_term?: PurchaseOrderRequestPaymentTerm.Raw | null;
        currency?: PurchaseOrderRequestCurrency.Raw | null;
        inclusive_of_tax?: boolean | null;
        exchange_rate?: string | null;
        tracking_categories?: (PurchaseOrderRequestTrackingCategoriesItem.Raw | null | undefined)[] | null;
        line_items?: PurchaseOrderLineItemRequest.Raw[] | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
