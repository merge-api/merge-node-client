/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface PaginatedAccountList {
    next?: string;
    previous?: string;
    results?: Merge.accounting.Account[];
}
