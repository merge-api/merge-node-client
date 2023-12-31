/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CreditNoteCurrency: core.serialization.Schema<
    serializers.accounting.CreditNoteCurrency.Raw,
    Merge.accounting.CreditNoteCurrency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.CurrencyEnum),
    core.serialization.string(),
]);

export declare namespace CreditNoteCurrency {
    type Raw = serializers.accounting.CurrencyEnum.Raw | string;
}
