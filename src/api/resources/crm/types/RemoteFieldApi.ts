/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface RemoteFieldApi {
    schema: Record<string, unknown>;
    remoteKeyName: string;
    remoteEndpointInfo: Merge.crm.RemoteEndpointInfo;
    exampleValues?: unknown[];
    advancedMetadata?: Merge.crm.AdvancedMetadata;
    coverage?: Merge.crm.RemoteFieldApiCoverage;
}
