/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaxComponentComponentType: core.serialization.Schema<
    serializers.accounting.TaxComponentComponentType.Raw,
    Merge.accounting.TaxComponentComponentType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.ComponentTypeEnum),
    core.serialization.string(),
]);

export declare namespace TaxComponentComponentType {
    type Raw = serializers.accounting.ComponentTypeEnum.Raw | string;
}