/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const MergeEnvironment = {
    Production: "https://api.merge.dev/api",
    Sandbox: "https://api-sandbox.merge.dev/api",
    ProductionEu: "https://api-eu.merge.dev/api",
} as const;

export type MergeEnvironment =
    | typeof MergeEnvironment.Production
    | typeof MergeEnvironment.Sandbox
    | typeof MergeEnvironment.ProductionEu;
