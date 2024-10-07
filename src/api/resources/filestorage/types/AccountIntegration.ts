/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface AccountIntegration {
    /** Company name. */
    name: string;
    /** Optional. This shortened name appears in places with limited space, usually in conjunction with the platform's logo (e.g., Merge Link menu).<br><br>Example: <i>Workforce Now (in lieu of ADP Workforce Now), SuccessFactors (in lieu of SAP SuccessFactors)</i> */
    abbreviatedName?: string;
    /** Category or categories this integration belongs to. Multiple categories should be comma separated, i.e. [ats, hris]. */
    categories?: Merge.filestorage.CategoriesEnum[];
    /** Company logo in rectangular shape. */
    image?: string;
    /** Company logo in square shape. */
    squareImage?: string;
    /** The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b> */
    color?: string;
    slug?: string;
    /** Mapping of API endpoints to documentation urls for support. Example: {'GET': [['/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve'],['/common-model-actions', 'https://docs.merge.dev/accounting/common-model-actions/#common_model_actions_retrieve']], 'POST': []} */
    apiEndpointsToDocumentationUrls?: Record<string, unknown>;
    /** Setup guide URL for third party webhook creation. Exposed in Merge Docs. */
    webhookSetupGuideUrl?: string;
    /** Category or categories this integration is in beta status for. */
    categoryBetaStatus?: Record<string, unknown>;
}
