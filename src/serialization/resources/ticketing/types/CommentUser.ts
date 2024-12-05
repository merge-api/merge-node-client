/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const CommentUser: core.serialization.Schema<
    serializers.ticketing.CommentUser.Raw,
    Merge.ticketing.CommentUser
> = core.serialization.undiscriminatedUnion([core.serialization.string(), User]);

export declare namespace CommentUser {
    type Raw = string | User.Raw;
}
