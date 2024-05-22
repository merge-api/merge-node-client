/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EventTypeEnum: core.serialization.Schema<
    serializers.ticketing.EventTypeEnum.Raw,
    Merge.ticketing.EventTypeEnum
> = core.serialization.enum_([
    "CREATED_REMOTE_PRODUCTION_API_KEY",
    "DELETED_REMOTE_PRODUCTION_API_KEY",
    "CREATED_TEST_API_KEY",
    "DELETED_TEST_API_KEY",
    "REGENERATED_PRODUCTION_API_KEY",
    "INVITED_USER",
    "TWO_FACTOR_AUTH_ENABLED",
    "TWO_FACTOR_AUTH_DISABLED",
    "DELETED_LINKED_ACCOUNT",
    "CREATED_DESTINATION",
    "DELETED_DESTINATION",
    "CHANGED_DESTINATION",
    "CHANGED_SCOPES",
    "CHANGED_PERSONAL_INFORMATION",
    "CHANGED_ORGANIZATION_SETTINGS",
    "ENABLED_INTEGRATION",
    "DISABLED_INTEGRATION",
    "ENABLED_CATEGORY",
    "DISABLED_CATEGORY",
    "CHANGED_PASSWORD",
    "RESET_PASSWORD",
    "ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION",
    "ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT",
    "DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION",
    "DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT",
    "CREATED_INTEGRATION_WIDE_FIELD_MAPPING",
    "CREATED_LINKED_ACCOUNT_FIELD_MAPPING",
    "CHANGED_INTEGRATION_WIDE_FIELD_MAPPING",
    "CHANGED_LINKED_ACCOUNT_FIELD_MAPPING",
    "DELETED_INTEGRATION_WIDE_FIELD_MAPPING",
    "DELETED_LINKED_ACCOUNT_FIELD_MAPPING",
    "FORCED_LINKED_ACCOUNT_RESYNC",
    "MUTED_ISSUE",
    "GENERATED_MAGIC_LINK",
    "ENABLED_MERGE_WEBHOOK",
    "DISABLED_MERGE_WEBHOOK",
    "MERGE_WEBHOOK_TARGET_CHANGED",
]);

export declare namespace EventTypeEnum {
    type Raw =
        | "CREATED_REMOTE_PRODUCTION_API_KEY"
        | "DELETED_REMOTE_PRODUCTION_API_KEY"
        | "CREATED_TEST_API_KEY"
        | "DELETED_TEST_API_KEY"
        | "REGENERATED_PRODUCTION_API_KEY"
        | "INVITED_USER"
        | "TWO_FACTOR_AUTH_ENABLED"
        | "TWO_FACTOR_AUTH_DISABLED"
        | "DELETED_LINKED_ACCOUNT"
        | "CREATED_DESTINATION"
        | "DELETED_DESTINATION"
        | "CHANGED_DESTINATION"
        | "CHANGED_SCOPES"
        | "CHANGED_PERSONAL_INFORMATION"
        | "CHANGED_ORGANIZATION_SETTINGS"
        | "ENABLED_INTEGRATION"
        | "DISABLED_INTEGRATION"
        | "ENABLED_CATEGORY"
        | "DISABLED_CATEGORY"
        | "CHANGED_PASSWORD"
        | "RESET_PASSWORD"
        | "ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION"
        | "ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT"
        | "DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION"
        | "DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT"
        | "CREATED_INTEGRATION_WIDE_FIELD_MAPPING"
        | "CREATED_LINKED_ACCOUNT_FIELD_MAPPING"
        | "CHANGED_INTEGRATION_WIDE_FIELD_MAPPING"
        | "CHANGED_LINKED_ACCOUNT_FIELD_MAPPING"
        | "DELETED_INTEGRATION_WIDE_FIELD_MAPPING"
        | "DELETED_LINKED_ACCOUNT_FIELD_MAPPING"
        | "FORCED_LINKED_ACCOUNT_RESYNC"
        | "MUTED_ISSUE"
        | "GENERATED_MAGIC_LINK"
        | "ENABLED_MERGE_WEBHOOK"
        | "DISABLED_MERGE_WEBHOOK"
        | "MERGE_WEBHOOK_TARGET_CHANGED";
}
