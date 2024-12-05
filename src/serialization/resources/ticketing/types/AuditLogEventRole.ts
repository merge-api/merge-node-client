/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RoleEnum } from "./RoleEnum";

export const AuditLogEventRole: core.serialization.Schema<
    serializers.ticketing.AuditLogEventRole.Raw,
    Merge.ticketing.AuditLogEventRole
> = core.serialization.undiscriminatedUnion([RoleEnum, core.serialization.string()]);

export declare namespace AuditLogEventRole {
    type Raw = RoleEnum.Raw | string;
}
