/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const EndUserDetailsRequest: core.serialization.Schema<
    serializers.crm.EndUserDetailsRequest.Raw,
    Merge.crm.EndUserDetailsRequest
> = core.serialization.object({
    endUserEmailAddress: core.serialization.property("end_user_email_address", core.serialization.string()),
    endUserOrganizationName: core.serialization.property("end_user_organization_name", core.serialization.string()),
    endUserOriginId: core.serialization.property("end_user_origin_id", core.serialization.string()),
    categories: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../../../..")).crm.CategoriesEnum)
    ),
    integration: core.serialization.string().optional(),
    linkExpiryMins: core.serialization.property("link_expiry_mins", core.serialization.number().optional()),
    shouldCreateMagicLinkUrl: core.serialization.property(
        "should_create_magic_link_url",
        core.serialization.boolean().optional()
    ),
    commonModels: core.serialization.property(
        "common_models",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../../..")).crm.CommonModelScopesBodyRequest
                )
            )
            .optional()
    ),
    categoryCommonModelScopes: core.serialization.property(
        "category_common_model_scopes",
        core.serialization
            .record(
                core.serialization.string(),
                core.serialization
                    .list(
                        core.serialization.lazyObject(
                            async () =>
                                (await import("../../../../../..")).crm.IndividualCommonModelScopeDeserializerRequest
                        )
                    )
                    .optional()
            )
            .optional()
    ),
    language: core.serialization.string().optional(),
    integrationSpecificConfig: core.serialization.property(
        "integration_specific_config",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace EndUserDetailsRequest {
    interface Raw {
        end_user_email_address: string;
        end_user_organization_name: string;
        end_user_origin_id: string;
        categories: serializers.crm.CategoriesEnum.Raw[];
        integration?: string | null;
        link_expiry_mins?: number | null;
        should_create_magic_link_url?: boolean | null;
        common_models?: serializers.crm.CommonModelScopesBodyRequest.Raw[] | null;
        category_common_model_scopes?: Record<
            string,
            serializers.crm.IndividualCommonModelScopeDeserializerRequest.Raw[] | null | undefined
        > | null;
        language?: string | null;
        integration_specific_config?: Record<string, unknown> | null;
    }
}
