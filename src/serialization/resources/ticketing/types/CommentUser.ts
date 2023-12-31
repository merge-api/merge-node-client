/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CommentUser: core.serialization.Schema<
    serializers.ticketing.CommentUser.Raw,
    Merge.ticketing.CommentUser
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ticketing.User),
]);

export declare namespace CommentUser {
    type Raw = string | serializers.ticketing.User.Raw;
}
