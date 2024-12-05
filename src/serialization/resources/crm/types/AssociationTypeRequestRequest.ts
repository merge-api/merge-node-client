/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ObjectClassDescriptionRequest } from "./ObjectClassDescriptionRequest";
import { CardinalityEnum } from "./CardinalityEnum";

export const AssociationTypeRequestRequest: core.serialization.ObjectSchema<
    serializers.crm.AssociationTypeRequestRequest.Raw,
    Merge.crm.AssociationTypeRequestRequest
> = core.serialization.object({
    sourceObjectClass: core.serialization.property("source_object_class", ObjectClassDescriptionRequest),
    targetObjectClasses: core.serialization.property(
        "target_object_classes",
        core.serialization.list(ObjectClassDescriptionRequest)
    ),
    remoteKeyName: core.serialization.property("remote_key_name", core.serialization.string()),
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    cardinality: CardinalityEnum.optional(),
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
});

export declare namespace AssociationTypeRequestRequest {
    interface Raw {
        source_object_class: ObjectClassDescriptionRequest.Raw;
        target_object_classes: ObjectClassDescriptionRequest.Raw[];
        remote_key_name: string;
        display_name?: string | null;
        cardinality?: CardinalityEnum.Raw | null;
        is_required?: boolean | null;
    }
}
