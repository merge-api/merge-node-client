/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { BankInfoEmployee } from "./BankInfoEmployee";
import { BankInfoAccountType } from "./BankInfoAccountType";
import { RemoteData } from "./RemoteData";

export const BankInfo: core.serialization.ObjectSchema<serializers.hris.BankInfo.Raw, Merge.hris.BankInfo> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        employee: BankInfoEmployee.optional(),
        accountNumber: core.serialization.property("account_number", core.serialization.string().optional()),
        routingNumber: core.serialization.property("routing_number", core.serialization.string().optional()),
        bankName: core.serialization.property("bank_name", core.serialization.string().optional()),
        accountType: core.serialization.property("account_type", BankInfoAccountType.optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
    });

export declare namespace BankInfo {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        employee?: BankInfoEmployee.Raw | null;
        account_number?: string | null;
        routing_number?: string | null;
        bank_name?: string | null;
        account_type?: BankInfoAccountType.Raw | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
