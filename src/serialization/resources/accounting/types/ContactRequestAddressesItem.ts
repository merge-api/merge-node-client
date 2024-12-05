/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Address } from "./Address";

export const ContactRequestAddressesItem: core.serialization.Schema<
    serializers.accounting.ContactRequestAddressesItem.Raw,
    Merge.accounting.ContactRequestAddressesItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Address]);

export declare namespace ContactRequestAddressesItem {
    type Raw = string | Address.Raw;
}
