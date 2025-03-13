/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `CREATED_REMOTE_PRODUCTION_API_KEY` - CREATED_REMOTE_PRODUCTION_API_KEY
 * - `DELETED_REMOTE_PRODUCTION_API_KEY` - DELETED_REMOTE_PRODUCTION_API_KEY
 * - `CREATED_TEST_API_KEY` - CREATED_TEST_API_KEY
 * - `DELETED_TEST_API_KEY` - DELETED_TEST_API_KEY
 * - `REGENERATED_PRODUCTION_API_KEY` - REGENERATED_PRODUCTION_API_KEY
 * - `INVITED_USER` - INVITED_USER
 * - `TWO_FACTOR_AUTH_ENABLED` - TWO_FACTOR_AUTH_ENABLED
 * - `TWO_FACTOR_AUTH_DISABLED` - TWO_FACTOR_AUTH_DISABLED
 * - `DELETED_LINKED_ACCOUNT` - DELETED_LINKED_ACCOUNT
 * - `DELETED_ALL_COMMON_MODELS_FOR_LINKED_ACCOUNT` - DELETED_ALL_COMMON_MODELS_FOR_LINKED_ACCOUNT
 * - `CREATED_DESTINATION` - CREATED_DESTINATION
 * - `DELETED_DESTINATION` - DELETED_DESTINATION
 * - `CHANGED_DESTINATION` - CHANGED_DESTINATION
 * - `CHANGED_SCOPES` - CHANGED_SCOPES
 * - `CHANGED_PERSONAL_INFORMATION` - CHANGED_PERSONAL_INFORMATION
 * - `CHANGED_ORGANIZATION_SETTINGS` - CHANGED_ORGANIZATION_SETTINGS
 * - `ENABLED_INTEGRATION` - ENABLED_INTEGRATION
 * - `DISABLED_INTEGRATION` - DISABLED_INTEGRATION
 * - `ENABLED_CATEGORY` - ENABLED_CATEGORY
 * - `DISABLED_CATEGORY` - DISABLED_CATEGORY
 * - `CHANGED_PASSWORD` - CHANGED_PASSWORD
 * - `RESET_PASSWORD` - RESET_PASSWORD
 * - `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
 * - `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
 * - `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
 * - `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
 * - `CREATED_INTEGRATION_WIDE_FIELD_MAPPING` - CREATED_INTEGRATION_WIDE_FIELD_MAPPING
 * - `CREATED_LINKED_ACCOUNT_FIELD_MAPPING` - CREATED_LINKED_ACCOUNT_FIELD_MAPPING
 * - `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING` - CHANGED_INTEGRATION_WIDE_FIELD_MAPPING
 * - `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING` - CHANGED_LINKED_ACCOUNT_FIELD_MAPPING
 * - `DELETED_INTEGRATION_WIDE_FIELD_MAPPING` - DELETED_INTEGRATION_WIDE_FIELD_MAPPING
 * - `DELETED_LINKED_ACCOUNT_FIELD_MAPPING` - DELETED_LINKED_ACCOUNT_FIELD_MAPPING
 * - `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
 * - `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
 * - `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
 * - `FORCED_LINKED_ACCOUNT_RESYNC` - FORCED_LINKED_ACCOUNT_RESYNC
 * - `MUTED_ISSUE` - MUTED_ISSUE
 * - `GENERATED_MAGIC_LINK` - GENERATED_MAGIC_LINK
 * - `ENABLED_MERGE_WEBHOOK` - ENABLED_MERGE_WEBHOOK
 * - `DISABLED_MERGE_WEBHOOK` - DISABLED_MERGE_WEBHOOK
 * - `MERGE_WEBHOOK_TARGET_CHANGED` - MERGE_WEBHOOK_TARGET_CHANGED
 * - `END_USER_CREDENTIALS_ACCESSED` - END_USER_CREDENTIALS_ACCESSED
 */
export type EventTypeEnum =
    | "CREATED_REMOTE_PRODUCTION_API_KEY"
    | "DELETED_REMOTE_PRODUCTION_API_KEY"
    | "CREATED_TEST_API_KEY"
    | "DELETED_TEST_API_KEY"
    | "REGENERATED_PRODUCTION_API_KEY"
    | "INVITED_USER"
    | "TWO_FACTOR_AUTH_ENABLED"
    | "TWO_FACTOR_AUTH_DISABLED"
    | "DELETED_LINKED_ACCOUNT"
    | "DELETED_ALL_COMMON_MODELS_FOR_LINKED_ACCOUNT"
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
    | "CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE"
    | "CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE"
    | "DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE"
    | "FORCED_LINKED_ACCOUNT_RESYNC"
    | "MUTED_ISSUE"
    | "GENERATED_MAGIC_LINK"
    | "ENABLED_MERGE_WEBHOOK"
    | "DISABLED_MERGE_WEBHOOK"
    | "MERGE_WEBHOOK_TARGET_CHANGED"
    | "END_USER_CREDENTIALS_ACCESSED";

export const EventTypeEnum = {
    CreatedRemoteProductionApiKey: "CREATED_REMOTE_PRODUCTION_API_KEY",
    DeletedRemoteProductionApiKey: "DELETED_REMOTE_PRODUCTION_API_KEY",
    CreatedTestApiKey: "CREATED_TEST_API_KEY",
    DeletedTestApiKey: "DELETED_TEST_API_KEY",
    RegeneratedProductionApiKey: "REGENERATED_PRODUCTION_API_KEY",
    InvitedUser: "INVITED_USER",
    TwoFactorAuthEnabled: "TWO_FACTOR_AUTH_ENABLED",
    TwoFactorAuthDisabled: "TWO_FACTOR_AUTH_DISABLED",
    DeletedLinkedAccount: "DELETED_LINKED_ACCOUNT",
    DeletedAllCommonModelsForLinkedAccount: "DELETED_ALL_COMMON_MODELS_FOR_LINKED_ACCOUNT",
    CreatedDestination: "CREATED_DESTINATION",
    DeletedDestination: "DELETED_DESTINATION",
    ChangedDestination: "CHANGED_DESTINATION",
    ChangedScopes: "CHANGED_SCOPES",
    ChangedPersonalInformation: "CHANGED_PERSONAL_INFORMATION",
    ChangedOrganizationSettings: "CHANGED_ORGANIZATION_SETTINGS",
    EnabledIntegration: "ENABLED_INTEGRATION",
    DisabledIntegration: "DISABLED_INTEGRATION",
    EnabledCategory: "ENABLED_CATEGORY",
    DisabledCategory: "DISABLED_CATEGORY",
    ChangedPassword: "CHANGED_PASSWORD",
    ResetPassword: "RESET_PASSWORD",
    EnabledRedactUnmappedDataForOrganization: "ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION",
    EnabledRedactUnmappedDataForLinkedAccount: "ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT",
    DisabledRedactUnmappedDataForOrganization: "DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION",
    DisabledRedactUnmappedDataForLinkedAccount: "DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT",
    CreatedIntegrationWideFieldMapping: "CREATED_INTEGRATION_WIDE_FIELD_MAPPING",
    CreatedLinkedAccountFieldMapping: "CREATED_LINKED_ACCOUNT_FIELD_MAPPING",
    ChangedIntegrationWideFieldMapping: "CHANGED_INTEGRATION_WIDE_FIELD_MAPPING",
    ChangedLinkedAccountFieldMapping: "CHANGED_LINKED_ACCOUNT_FIELD_MAPPING",
    DeletedIntegrationWideFieldMapping: "DELETED_INTEGRATION_WIDE_FIELD_MAPPING",
    DeletedLinkedAccountFieldMapping: "DELETED_LINKED_ACCOUNT_FIELD_MAPPING",
    CreatedLinkedAccountCommonModelOverride: "CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE",
    ChangedLinkedAccountCommonModelOverride: "CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE",
    DeletedLinkedAccountCommonModelOverride: "DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE",
    ForcedLinkedAccountResync: "FORCED_LINKED_ACCOUNT_RESYNC",
    MutedIssue: "MUTED_ISSUE",
    GeneratedMagicLink: "GENERATED_MAGIC_LINK",
    EnabledMergeWebhook: "ENABLED_MERGE_WEBHOOK",
    DisabledMergeWebhook: "DISABLED_MERGE_WEBHOOK",
    MergeWebhookTargetChanged: "MERGE_WEBHOOK_TARGET_CHANGED",
    EndUserCredentialsAccessed: "END_USER_CREDENTIALS_ACCESSED",
} as const;
