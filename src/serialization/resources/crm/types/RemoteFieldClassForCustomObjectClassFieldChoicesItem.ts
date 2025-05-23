/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const RemoteFieldClassForCustomObjectClassFieldChoicesItem: core.serialization.ObjectSchema<
    serializers.crm.RemoteFieldClassForCustomObjectClassFieldChoicesItem.Raw,
    Merge.crm.RemoteFieldClassForCustomObjectClassFieldChoicesItem
> = core.serialization.object({
    value: core.serialization.unknown().optional(),
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
});

export declare namespace RemoteFieldClassForCustomObjectClassFieldChoicesItem {
    export interface Raw {
        value?: unknown | null;
        display_name?: string | null;
    }
}
