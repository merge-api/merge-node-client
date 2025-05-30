/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Contact } from "./Contact";

export const EngagementRequestContactsItem: core.serialization.Schema<
    serializers.crm.EngagementRequestContactsItem.Raw,
    Merge.crm.EngagementRequestContactsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Contact]);

export declare namespace EngagementRequestContactsItem {
    export type Raw = string | Contact.Raw;
}
