/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const PatchedContactRequestOwner: core.serialization.Schema<
    serializers.crm.PatchedContactRequestOwner.Raw,
    Merge.crm.PatchedContactRequestOwner
> = core.serialization.undiscriminatedUnion([core.serialization.string(), User]);

export declare namespace PatchedContactRequestOwner {
    type Raw = string | User.Raw;
}
