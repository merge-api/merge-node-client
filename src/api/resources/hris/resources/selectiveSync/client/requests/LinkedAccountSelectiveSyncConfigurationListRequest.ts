/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         syncConfigurations: [{
 *                 linkedAccountConditions: []
 *             }]
 *     }
 */
export interface LinkedAccountSelectiveSyncConfigurationListRequest {
    /** The selective syncs associated with a linked account. */
    syncConfigurations: Merge.hris.LinkedAccountSelectiveSyncConfigurationRequest[];
}
