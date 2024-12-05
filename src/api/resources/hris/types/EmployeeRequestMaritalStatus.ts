/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * The employee's filing status as related to marital status.
 *
 * - `SINGLE` - SINGLE
 * - `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
 * - `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
 * - `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
 * - `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
 */
export type EmployeeRequestMaritalStatus = Merge.hris.MaritalStatusEnum | string;
