/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExpenseReportLineRequestAccount } from "./ExpenseReportLineRequestAccount";
import { TransactionCurrencyEnum } from "./TransactionCurrencyEnum";
import { ExpenseReportLineRequestEmployee } from "./ExpenseReportLineRequestEmployee";
import { ExpenseReportLineRequestProject } from "./ExpenseReportLineRequestProject";
import { ExpenseReportLineRequestCompany } from "./ExpenseReportLineRequestCompany";
import { ExpenseReportLineRequestContact } from "./ExpenseReportLineRequestContact";
import { ExpenseReportLineRequestTaxRate } from "./ExpenseReportLineRequestTaxRate";
import { RemoteFieldRequest } from "./RemoteFieldRequest";

export const ExpenseReportLineRequest: core.serialization.ObjectSchema<
    serializers.accounting.ExpenseReportLineRequest.Raw,
    Merge.accounting.ExpenseReportLineRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    account: ExpenseReportLineRequestAccount.optional(),
    description: core.serialization.string().optional(),
    expenseDate: core.serialization.property("expense_date", core.serialization.date().optional()),
    amount: core.serialization.number().optional(),
    currency: TransactionCurrencyEnum.optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    isBillable: core.serialization.property("is_billable", core.serialization.boolean().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string()),
    ),
    employee: ExpenseReportLineRequestEmployee.optional(),
    project: ExpenseReportLineRequestProject.optional(),
    company: ExpenseReportLineRequestCompany.optional(),
    contact: ExpenseReportLineRequestContact.optional(),
    quantity: core.serialization.number().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.number().optional()),
    nonReimbursable: core.serialization.property("non_reimbursable", core.serialization.boolean().optional()),
    taxAmount: core.serialization.property("tax_amount", core.serialization.number().optional()),
    inclusiveOfTax: core.serialization.property("inclusive_of_tax", core.serialization.boolean().optional()),
    taxRate: core.serialization.property("tax_rate", ExpenseReportLineRequestTaxRate.optional()),
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

export declare namespace ExpenseReportLineRequest {
    export interface Raw {
        remote_id?: string | null;
        account?: ExpenseReportLineRequestAccount.Raw | null;
        description?: string | null;
        expense_date?: string | null;
        amount?: number | null;
        currency?: TransactionCurrencyEnum.Raw | null;
        exchange_rate?: string | null;
        is_billable?: boolean | null;
        tracking_categories: string[];
        employee?: ExpenseReportLineRequestEmployee.Raw | null;
        project?: ExpenseReportLineRequestProject.Raw | null;
        company?: ExpenseReportLineRequestCompany.Raw | null;
        contact?: ExpenseReportLineRequestContact.Raw | null;
        quantity?: number | null;
        unit_price?: number | null;
        non_reimbursable?: boolean | null;
        tax_amount?: number | null;
        inclusive_of_tax?: boolean | null;
        tax_rate?: ExpenseReportLineRequestTaxRate.Raw | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: RemoteFieldRequest.Raw[] | null;
    }
}
