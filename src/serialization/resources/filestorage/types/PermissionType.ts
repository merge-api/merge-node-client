/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PermissionType: core.serialization.Schema<
    serializers.filestorage.PermissionType.Raw,
    Merge.filestorage.PermissionType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).filestorage.TypeEnum),
    core.serialization.string(),
]);

export declare namespace PermissionType {
    type Raw = serializers.filestorage.TypeEnum.Raw | string;
}
