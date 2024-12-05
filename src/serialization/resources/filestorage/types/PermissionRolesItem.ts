/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RolesEnum } from "./RolesEnum";

export const PermissionRolesItem: core.serialization.Schema<
    serializers.filestorage.PermissionRolesItem.Raw,
    Merge.filestorage.PermissionRolesItem
> = core.serialization.undiscriminatedUnion([RolesEnum, core.serialization.string()]);

export declare namespace PermissionRolesItem {
    type Raw = RolesEnum.Raw | string;
}
