/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceRequestType } from "./InvoiceRequestType";
import { InvoiceRequestContact } from "./InvoiceRequestContact";
import { InvoiceRequestEmployee } from "./InvoiceRequestEmployee";
import { InvoiceRequestStatus } from "./InvoiceRequestStatus";
import { InvoiceRequestCompany } from "./InvoiceRequestCompany";
import { InvoiceRequestCurrency } from "./InvoiceRequestCurrency";
import { InvoiceRequestPaymentsItem } from "./InvoiceRequestPaymentsItem";
import { InvoiceRequestTrackingCategoriesItem } from "./InvoiceRequestTrackingCategoriesItem";
import { InvoiceLineItemRequest } from "./InvoiceLineItemRequest";
import { InvoiceRequestPurchaseOrdersItem } from "./InvoiceRequestPurchaseOrdersItem";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const InvoiceRequest: core.serialization.ObjectSchema<
    serializers.accounting.InvoiceRequest.Raw,
    Merge.accounting.InvoiceRequest
> = core.serialization.object({
    type: InvoiceRequestType.optional(),
    contact: InvoiceRequestContact.optional(),
    number: core.serialization.string().optional(),
    issueDate: core.serialization.property("issue_date", core.serialization.date().optional()),
    dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
    paidOnDate: core.serialization.property("paid_on_date", core.serialization.date().optional()),
    employee: InvoiceRequestEmployee.optional(),
    memo: core.serialization.string().optional(),
    status: InvoiceRequestStatus.optional(),
    company: InvoiceRequestCompany.optional(),
    currency: InvoiceRequestCurrency.optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    totalDiscount: core.serialization.property("total_discount", core.serialization.number().optional()),
    subTotal: core.serialization.property("sub_total", core.serialization.number().optional()),
    totalTaxAmount: core.serialization.property("total_tax_amount", core.serialization.number().optional()),
    inclusiveOfTax: core.serialization.property("inclusive_of_tax", core.serialization.boolean().optional()),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    balance: core.serialization.number().optional(),
    payments: core.serialization.list(InvoiceRequestPaymentsItem.optional()).optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(InvoiceRequestTrackingCategoriesItem.optional()).optional()
    ),
    lineItems: core.serialization.property("line_items", core.serialization.list(InvoiceLineItemRequest).optional()),
    purchaseOrders: core.serialization.property(
        "purchase_orders",
        core.serialization.list(InvoiceRequestPurchaseOrdersItem.optional()).optional()
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

export declare namespace InvoiceRequest {
    interface Raw {
        type?: InvoiceRequestType.Raw | null;
        contact?: InvoiceRequestContact.Raw | null;
        number?: string | null;
        issue_date?: string | null;
        due_date?: string | null;
        paid_on_date?: string | null;
        employee?: InvoiceRequestEmployee.Raw | null;
        memo?: string | null;
        status?: InvoiceRequestStatus.Raw | null;
        company?: InvoiceRequestCompany.Raw | null;
        currency?: InvoiceRequestCurrency.Raw | null;
        exchange_rate?: string | null;
        total_discount?: number | null;
        sub_total?: number | null;
        total_tax_amount?: number | null;
        inclusive_of_tax?: boolean | null;
        total_amount?: number | null;
        balance?: number | null;
        payments?: (InvoiceRequestPaymentsItem.Raw | null | undefined)[] | null;
        tracking_categories?: (InvoiceRequestTrackingCategoriesItem.Raw | null | undefined)[] | null;
        line_items?: InvoiceLineItemRequest.Raw[] | null;
        purchase_orders?: (InvoiceRequestPurchaseOrdersItem.Raw | null | undefined)[] | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
