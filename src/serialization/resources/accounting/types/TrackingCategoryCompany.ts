/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyInfo } from "./CompanyInfo";

export const TrackingCategoryCompany: core.serialization.Schema<
    serializers.accounting.TrackingCategoryCompany.Raw,
    Merge.accounting.TrackingCategoryCompany
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CompanyInfo]);

export declare namespace TrackingCategoryCompany {
    export type Raw = string | CompanyInfo.Raw;
}
