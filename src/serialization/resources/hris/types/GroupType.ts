/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { GroupTypeEnum } from "./GroupTypeEnum";

export const GroupType: core.serialization.Schema<serializers.hris.GroupType.Raw, Merge.hris.GroupType> =
    core.serialization.undiscriminatedUnion([GroupTypeEnum, core.serialization.string()]);

export declare namespace GroupType {
    type Raw = GroupTypeEnum.Raw | string;
}
