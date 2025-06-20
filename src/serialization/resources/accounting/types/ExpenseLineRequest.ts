/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExpenseLineRequestItem } from "./ExpenseLineRequestItem";
import { ExpenseLineRequestTrackingCategory } from "./ExpenseLineRequestTrackingCategory";
import { ExpenseLineRequestTrackingCategoriesItem } from "./ExpenseLineRequestTrackingCategoriesItem";
import { ExpenseLineRequestEmployee } from "./ExpenseLineRequestEmployee";
import { ExpenseLineRequestCurrency } from "./ExpenseLineRequestCurrency";
import { ExpenseLineRequestAccount } from "./ExpenseLineRequestAccount";
import { ExpenseLineRequestContact } from "./ExpenseLineRequestContact";
import { ExpenseLineRequestProject } from "./ExpenseLineRequestProject";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const ExpenseLineRequest: core.serialization.ObjectSchema<
    serializers.accounting.ExpenseLineRequest.Raw,
    Merge.accounting.ExpenseLineRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    item: ExpenseLineRequestItem.optional(),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property("tracking_category", ExpenseLineRequestTrackingCategory.optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(ExpenseLineRequestTrackingCategoriesItem.optional()).optional(),
    ),
    company: core.serialization.string().optional(),
    employee: ExpenseLineRequestEmployee.optional(),
    currency: ExpenseLineRequestCurrency.optional(),
    account: ExpenseLineRequestAccount.optional(),
    contact: ExpenseLineRequestContact.optional(),
    project: ExpenseLineRequestProject.optional(),
    description: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteFields: core.serialization.property("remote_fields", core.serialization.list(RemoteFieldRequest).optional()),
});

export declare namespace ExpenseLineRequest {
    export interface Raw {
        remote_id?: string | null;
        item?: ExpenseLineRequestItem.Raw | null;
        net_amount?: number | null;
        tracking_category?: ExpenseLineRequestTrackingCategory.Raw | null;
        tracking_categories?: (ExpenseLineRequestTrackingCategoriesItem.Raw | null | undefined)[] | null;
        company?: string | null;
        employee?: ExpenseLineRequestEmployee.Raw | null;
        currency?: ExpenseLineRequestCurrency.Raw | null;
        account?: ExpenseLineRequestAccount.Raw | null;
        contact?: ExpenseLineRequestContact.Raw | null;
        project?: ExpenseLineRequestProject.Raw | null;
        description?: string | null;
        exchange_rate?: string | null;
        tax_rate?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
