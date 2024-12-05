/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { AddressTypeEnum } from "./AddressTypeEnum";

export const AddressRequestType: core.serialization.Schema<
    serializers.accounting.AddressRequestType.Raw,
    Merge.accounting.AddressRequestType
> = core.serialization.undiscriminatedUnion([AddressTypeEnum, core.serialization.string()]);

export declare namespace AddressRequestType {
    type Raw = AddressTypeEnum.Raw | string;
}
