/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TypeEnum } from "./TypeEnum";

export const PermissionRequestType: core.serialization.Schema<
    serializers.filestorage.PermissionRequestType.Raw,
    Merge.filestorage.PermissionRequestType
> = core.serialization.undiscriminatedUnion([TypeEnum, core.serialization.string()]);

export declare namespace PermissionRequestType {
    type Raw = TypeEnum.Raw | string;
}
