/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface AccountDetailsAndActionsIntegration {
    name: string;
    categories: Merge.filestorage.CategoriesEnum[];
    image?: string;
    squareImage?: string;
    color: string;
    slug: string;
    passthroughAvailable: boolean;
    availableModelOperations?: Merge.filestorage.ModelOperation[];
}
