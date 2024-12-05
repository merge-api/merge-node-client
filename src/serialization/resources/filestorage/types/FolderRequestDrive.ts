/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { Drive } from "./Drive";

export const FolderRequestDrive: core.serialization.Schema<
    serializers.filestorage.FolderRequestDrive.Raw,
    Merge.filestorage.FolderRequestDrive
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Drive]);

export declare namespace FolderRequestDrive {
    type Raw = string | Drive.Raw;
}
