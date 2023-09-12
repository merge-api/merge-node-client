/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CreditNotesRetrieveRequestExpand =
    | "applied_to_lines"
    | "line_items"
    | "line_items,applied_to_lines"
    | "line_items,tracking_categories"
    | "line_items,tracking_categories,applied_to_lines"
    | "payments"
    | "payments,applied_to_lines"
    | "payments,line_items"
    | "payments,line_items,applied_to_lines"
    | "payments,line_items,tracking_categories"
    | "payments,line_items,tracking_categories,applied_to_lines"
    | "payments,tracking_categories"
    | "payments,tracking_categories,applied_to_lines"
    | "tracking_categories"
    | "tracking_categories,applied_to_lines";

export const CreditNotesRetrieveRequestExpand = {
    AppliedToLines: "applied_to_lines",
    LineItems: "line_items",
    LineItemsAppliedToLines: "line_items,applied_to_lines",
    LineItemsTrackingCategories: "line_items,tracking_categories",
    LineItemsTrackingCategoriesAppliedToLines: "line_items,tracking_categories,applied_to_lines",
    Payments: "payments",
    PaymentsAppliedToLines: "payments,applied_to_lines",
    PaymentsLineItems: "payments,line_items",
    PaymentsLineItemsAppliedToLines: "payments,line_items,applied_to_lines",
    PaymentsLineItemsTrackingCategories: "payments,line_items,tracking_categories",
    PaymentsLineItemsTrackingCategoriesAppliedToLines: "payments,line_items,tracking_categories,applied_to_lines",
    PaymentsTrackingCategories: "payments,tracking_categories",
    PaymentsTrackingCategoriesAppliedToLines: "payments,tracking_categories,applied_to_lines",
    TrackingCategories: "tracking_categories",
    TrackingCategoriesAppliedToLines: "tracking_categories,applied_to_lines",
} as const;
