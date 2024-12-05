/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseTypeEnum } from "./ResponseTypeEnum";

export const RemoteResponse: core.serialization.ObjectSchema<
    serializers.accounting.RemoteResponse.Raw,
    Merge.accounting.RemoteResponse
> = core.serialization.object({
    method: core.serialization.string(),
    path: core.serialization.string(),
    status: core.serialization.number(),
    response: core.serialization.unknown(),
    responseHeaders: core.serialization.property(
        "response_headers",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    responseType: core.serialization.property("response_type", ResponseTypeEnum.optional()),
    headers: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace RemoteResponse {
    interface Raw {
        method: string;
        path: string;
        status: number;
        response?: unknown;
        response_headers?: Record<string, unknown> | null;
        response_type?: ResponseTypeEnum.Raw | null;
        headers?: Record<string, unknown> | null;
    }
}
