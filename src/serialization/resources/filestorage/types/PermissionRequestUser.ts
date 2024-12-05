/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const PermissionRequestUser: core.serialization.Schema<
    serializers.filestorage.PermissionRequestUser.Raw,
    Merge.filestorage.PermissionRequestUser
> = core.serialization.undiscriminatedUnion([core.serialization.string(), User]);

export declare namespace PermissionRequestUser {
    type Raw = string | User.Raw;
}
