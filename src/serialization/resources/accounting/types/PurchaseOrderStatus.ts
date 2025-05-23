/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PurchaseOrderStatusEnum } from "./PurchaseOrderStatusEnum";

export const PurchaseOrderStatus: core.serialization.Schema<
    serializers.accounting.PurchaseOrderStatus.Raw,
    Merge.accounting.PurchaseOrderStatus
> = core.serialization.undiscriminatedUnion([PurchaseOrderStatusEnum, core.serialization.string()]);

export declare namespace PurchaseOrderStatus {
    export type Raw = PurchaseOrderStatusEnum.Raw | string;
}
