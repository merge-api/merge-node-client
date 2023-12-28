/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface ConditionSchema {
    /** The ID of the condition schema. This ID is used when updating selective syncs for a linked account. */
    id: string;
    /** The common model for which a condition schema is defined. */
    commonModel?: string;
    /** User-facing _native condition_ name. e.g. "Skip Manager". */
    nativeName?: string;
    /** The name of the field on the common model that this condition corresponds to, if they conceptually match. e.g. "location_type". */
    fieldName?: string;
    /** Whether this condition can only be applied once. If false, the condition can be AND'd together multiple times. */
    isUnique?: boolean;
    /**
     * The type of value(s) that can be set for this condition.
     *
     * - `BOOLEAN` - BOOLEAN
     * - `DATE` - DATE
     * - `DATE_TIME` - DATE_TIME
     * - `INTEGER` - INTEGER
     * - `FLOAT` - FLOAT
     * - `STRING` - STRING
     * - `LIST_OF_STRINGS` - LIST_OF_STRINGS
     */
    conditionType: Merge.crm.ConditionSchemaConditionType;
    /** The schemas for the operators that can be used on a condition. */
    operators: Merge.crm.OperatorSchema[];
}
