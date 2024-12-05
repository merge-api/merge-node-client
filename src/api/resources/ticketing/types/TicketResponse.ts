/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface TicketResponse {
    model: Merge.ticketing.Ticket;
    warnings: Merge.ticketing.WarningValidationProblem[];
    errors: Merge.ticketing.ErrorValidationProblem[];
    logs?: Merge.ticketing.DebugModeLog[];
}
