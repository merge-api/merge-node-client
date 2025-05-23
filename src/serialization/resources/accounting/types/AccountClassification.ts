/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ClassificationEnum } from "./ClassificationEnum";

export const AccountClassification: core.serialization.Schema<
    serializers.accounting.AccountClassification.Raw,
    Merge.accounting.AccountClassification
> = core.serialization.undiscriminatedUnion([ClassificationEnum, core.serialization.string()]);

export declare namespace AccountClassification {
    export type Raw = ClassificationEnum.Raw | string;
}
