/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { MethodEnum } from "./MethodEnum";
import { MultipartFormFieldRequest } from "./MultipartFormFieldRequest";
import { RequestFormatEnum } from "./RequestFormatEnum";

export const DataPassthroughRequest: core.serialization.ObjectSchema<
    serializers.ats.DataPassthroughRequest.Raw,
    Merge.ats.DataPassthroughRequest
> = core.serialization.object({
    method: MethodEnum,
    path: core.serialization.string(),
    baseUrlOverride: core.serialization.property("base_url_override", core.serialization.string().optional()),
    data: core.serialization.string().optional(),
    multipartFormData: core.serialization.property(
        "multipart_form_data",
        core.serialization.list(MultipartFormFieldRequest).optional()
    ),
    headers: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    requestFormat: core.serialization.property("request_format", RequestFormatEnum.optional()),
    normalizeResponse: core.serialization.property("normalize_response", core.serialization.boolean().optional()),
});

export declare namespace DataPassthroughRequest {
    interface Raw {
        method: MethodEnum.Raw;
        path: string;
        base_url_override?: string | null;
        data?: string | null;
        multipart_form_data?: MultipartFormFieldRequest.Raw[] | null;
        headers?: Record<string, unknown> | null;
        request_format?: RequestFormatEnum.Raw | null;
        normalize_response?: boolean | null;
    }
}
