/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface RemoteFieldApi {
    schema: Record<string, unknown>;
    remoteKeyName: string;
    remoteEndpointInfo: Merge.ats.RemoteEndpointInfo;
    exampleValues?: unknown[];
    advancedMetadata?: Merge.ats.AdvancedMetadata;
    coverage?: Merge.ats.RemoteFieldApiCoverage;
}
