/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { StatusFd5Enum } from "./StatusFd5Enum";

export const SyncStatusStatus: core.serialization.Schema<
    serializers.accounting.SyncStatusStatus.Raw,
    Merge.accounting.SyncStatusStatus
> = core.serialization.undiscriminatedUnion([StatusFd5Enum, core.serialization.string()]);

export declare namespace SyncStatusStatus {
    export type Raw = StatusFd5Enum.Raw | string;
}
