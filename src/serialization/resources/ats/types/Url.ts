/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { UrlUrlType } from "./UrlUrlType";

export const Url: core.serialization.ObjectSchema<serializers.ats.Url.Raw, Merge.ats.Url> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    value: core.serialization.string().optional(),
    urlType: core.serialization.property("url_type", UrlUrlType.optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
});

export declare namespace Url {
    export interface Raw {
        created_at?: string | null;
        modified_at?: string | null;
        value?: string | null;
        url_type?: UrlUrlType.Raw | null;
        remote_was_deleted?: boolean | null;
    }
}
