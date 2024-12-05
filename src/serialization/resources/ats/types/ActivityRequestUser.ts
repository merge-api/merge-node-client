/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteUser } from "./RemoteUser";

export const ActivityRequestUser: core.serialization.Schema<
    serializers.ats.ActivityRequestUser.Raw,
    Merge.ats.ActivityRequestUser
> = core.serialization.undiscriminatedUnion([core.serialization.string(), RemoteUser]);

export declare namespace ActivityRequestUser {
    type Raw = string | RemoteUser.Raw;
}
