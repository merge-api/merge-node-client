/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AccessRoleEnum: core.serialization.Schema<serializers.ats.AccessRoleEnum.Raw, Merge.ats.AccessRoleEnum> =
    core.serialization.enum_(["SUPER_ADMIN", "ADMIN", "TEAM_MEMBER", "LIMITED_TEAM_MEMBER", "INTERVIEWER"]);

export declare namespace AccessRoleEnum {
    type Raw = "SUPER_ADMIN" | "ADMIN" | "TEAM_MEMBER" | "LIMITED_TEAM_MEMBER" | "INTERVIEWER";
}
