/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Merge from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { WebhookReceiver } from "../../../types/WebhookReceiver";

export const Response: core.serialization.Schema<
    serializers.ticketing.webhookReceivers.list.Response.Raw,
    Merge.ticketing.WebhookReceiver[]
> = core.serialization.list(WebhookReceiver);

export declare namespace Response {
    type Raw = WebhookReceiver.Raw[];
}
