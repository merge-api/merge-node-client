/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface TicketingContactResponse {
    model: Merge.ticketing.Contact;
    warnings: Merge.ticketing.WarningValidationProblem[];
    errors: Merge.ticketing.ErrorValidationProblem[];
    logs?: Merge.ticketing.DebugModeLog[];
}
