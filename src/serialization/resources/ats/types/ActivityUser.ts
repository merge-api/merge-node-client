/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteUser } from "./RemoteUser";

export const ActivityUser: core.serialization.Schema<serializers.ats.ActivityUser.Raw, Merge.ats.ActivityUser> =
    core.serialization.undiscriminatedUnion([core.serialization.string(), RemoteUser]);

export declare namespace ActivityUser {
    export type Raw = string | RemoteUser.Raw;
}
