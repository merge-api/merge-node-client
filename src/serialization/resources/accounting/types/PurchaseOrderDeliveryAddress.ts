/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Address } from "./Address";

export const PurchaseOrderDeliveryAddress: core.serialization.Schema<
    serializers.accounting.PurchaseOrderDeliveryAddress.Raw,
    Merge.accounting.PurchaseOrderDeliveryAddress
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Address]);

export declare namespace PurchaseOrderDeliveryAddress {
    type Raw = string | Address.Raw;
}
