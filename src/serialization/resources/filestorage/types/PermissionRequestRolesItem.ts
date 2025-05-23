/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RolesEnum } from "./RolesEnum";

export const PermissionRequestRolesItem: core.serialization.Schema<
    serializers.filestorage.PermissionRequestRolesItem.Raw,
    Merge.filestorage.PermissionRequestRolesItem
> = core.serialization.undiscriminatedUnion([RolesEnum, core.serialization.string()]);

export declare namespace PermissionRequestRolesItem {
    export type Raw = RolesEnum.Raw | string;
}
