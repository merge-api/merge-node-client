/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const ApplicationCandidate: core.serialization.Schema<
    serializers.ats.ApplicationCandidate.Raw,
    Merge.ats.ApplicationCandidate
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(() => serializers.ats.Candidate),
]);

export declare namespace ApplicationCandidate {
    export type Raw = string | serializers.ats.Candidate.Raw;
}
