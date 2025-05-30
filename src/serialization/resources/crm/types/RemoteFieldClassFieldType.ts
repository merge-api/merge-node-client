/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { FieldTypeEnum } from "./FieldTypeEnum";

export const RemoteFieldClassFieldType: core.serialization.Schema<
    serializers.crm.RemoteFieldClassFieldType.Raw,
    Merge.crm.RemoteFieldClassFieldType
> = core.serialization.undiscriminatedUnion([FieldTypeEnum, core.serialization.string()]);

export declare namespace RemoteFieldClassFieldType {
    export type Raw = FieldTypeEnum.Raw | string;
}
