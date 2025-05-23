/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AccessRoleEnum } from "./AccessRoleEnum";

export const RemoteUserAccessRole: core.serialization.Schema<
    serializers.ats.RemoteUserAccessRole.Raw,
    Merge.ats.RemoteUserAccessRole
> = core.serialization.undiscriminatedUnion([AccessRoleEnum, core.serialization.string()]);

export declare namespace RemoteUserAccessRole {
    export type Raw = AccessRoleEnum.Raw | string;
}
