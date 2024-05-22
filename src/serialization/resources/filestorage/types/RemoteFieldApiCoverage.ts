/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldApiCoverage: core.serialization.Schema<
    serializers.filestorage.RemoteFieldApiCoverage.Raw,
    Merge.filestorage.RemoteFieldApiCoverage
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.number()]);

export declare namespace RemoteFieldApiCoverage {
    type Raw = number | number;
}
