/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyInfo } from "./CompanyInfo";

export const ItemCompany: core.serialization.Schema<
    serializers.accounting.ItemCompany.Raw,
    Merge.accounting.ItemCompany
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CompanyInfo]);

export declare namespace ItemCompany {
    type Raw = string | CompanyInfo.Raw;
}
