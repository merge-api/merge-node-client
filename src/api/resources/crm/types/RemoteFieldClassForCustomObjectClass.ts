/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface RemoteFieldClassForCustomObjectClass {
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    displayName?: string;
    remoteKeyName?: string;
    description?: string;
    isRequired?: boolean;
    fieldType?: Merge.crm.RemoteFieldClassForCustomObjectClassFieldType;
    fieldFormat?: Merge.crm.RemoteFieldClassForCustomObjectClassFieldFormat;
    fieldChoices?: Merge.crm.RemoteFieldClassForCustomObjectClassFieldChoicesItem[];
    itemSchema?: Merge.crm.RemoteFieldClassForCustomObjectClassItemSchema;
}
