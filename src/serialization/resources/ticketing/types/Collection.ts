/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { CollectionAccessLevel } from "./CollectionAccessLevel";
import { CollectionCollectionType } from "./CollectionCollectionType";
import { RemoteData } from "./RemoteData";

export const Collection: core.serialization.ObjectSchema<
    serializers.ticketing.Collection.Raw,
    Merge.ticketing.Collection
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    accessLevel: core.serialization.property("access_level", CollectionAccessLevel.optional()),
    collectionType: core.serialization.property("collection_type", CollectionCollectionType.optional()),
    parentCollection: core.serialization.property(
        "parent_collection",
        core.serialization.lazy(() => serializers.ticketing.CollectionParentCollection).optional(),
    ),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
});

export declare namespace Collection {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        name?: string | null;
        description?: string | null;
        access_level?: CollectionAccessLevel.Raw | null;
        collection_type?: CollectionCollectionType.Raw | null;
        parent_collection?: serializers.ticketing.CollectionParentCollection.Raw | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
