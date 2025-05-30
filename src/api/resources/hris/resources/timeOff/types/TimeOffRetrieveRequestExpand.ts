/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TimeOffRetrieveRequestExpand = "approver" | "employee" | "employee,approver";
export const TimeOffRetrieveRequestExpand = {
    Approver: "approver",
    Employee: "employee",
    EmployeeApprover: "employee,approver",
} as const;
