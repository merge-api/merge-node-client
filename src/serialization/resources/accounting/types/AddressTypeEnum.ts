/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const AddressTypeEnum: core.serialization.Schema<
    serializers.accounting.AddressTypeEnum.Raw,
    Merge.accounting.AddressTypeEnum
> = core.serialization.enum_(["BILLING", "SHIPPING"]);

export declare namespace AddressTypeEnum {
    type Raw = "BILLING" | "SHIPPING";
}
