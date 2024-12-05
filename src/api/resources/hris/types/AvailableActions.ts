/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The AvailableActions Object
 *
 * ### Description
 *
 * The `Activity` object is used to see all available model/operation combinations for an integration.
 *
 * ### Usage Example
 *
 * Fetch all the actions available for the `Zenefits` integration.
 */
export interface AvailableActions {
    integration: Merge.hris.AccountIntegration;
    passthroughAvailable: boolean;
    availableModelOperations?: Merge.hris.ModelOperation[];
}
