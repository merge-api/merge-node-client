/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { VendorCreditLineRequestAccount } from "./VendorCreditLineRequestAccount";

export const VendorCreditLineRequest: core.serialization.ObjectSchema<
    serializers.accounting.VendorCreditLineRequest.Raw,
    Merge.accounting.VendorCreditLineRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string().optional()).optional()
    ),
    description: core.serialization.string().optional(),
    account: VendorCreditLineRequestAccount.optional(),
    company: core.serialization.string().optional(),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace VendorCreditLineRequest {
    interface Raw {
        remote_id?: string | null;
        net_amount?: number | null;
        tracking_category?: string | null;
        tracking_categories?: (string | null | undefined)[] | null;
        description?: string | null;
        account?: VendorCreditLineRequestAccount.Raw | null;
        company?: string | null;
        tax_rate?: string | null;
        exchange_rate?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
