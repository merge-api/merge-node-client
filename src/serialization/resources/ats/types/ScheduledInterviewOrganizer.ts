/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteUser } from "./RemoteUser";

export const ScheduledInterviewOrganizer: core.serialization.Schema<
    serializers.ats.ScheduledInterviewOrganizer.Raw,
    Merge.ats.ScheduledInterviewOrganizer
> = core.serialization.undiscriminatedUnion([core.serialization.string(), RemoteUser]);

export declare namespace ScheduledInterviewOrganizer {
    export type Raw = string | RemoteUser.Raw;
}
