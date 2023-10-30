/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CreditNotesListRequestExpand =
    | "accounting_period"
    | "company"
    | "company,accounting_period"
    | "contact"
    | "contact,accounting_period"
    | "contact,company"
    | "contact,company,accounting_period"
    | "line_items"
    | "line_items,accounting_period"
    | "line_items,company"
    | "line_items,company,accounting_period"
    | "line_items,contact"
    | "line_items,contact,accounting_period"
    | "line_items,contact,company"
    | "line_items,contact,company,accounting_period"
    | "line_items,tracking_categories"
    | "line_items,tracking_categories,accounting_period"
    | "line_items,tracking_categories,company"
    | "line_items,tracking_categories,company,accounting_period"
    | "line_items,tracking_categories,contact"
    | "line_items,tracking_categories,contact,accounting_period"
    | "line_items,tracking_categories,contact,company"
    | "line_items,tracking_categories,contact,company,accounting_period"
    | "payments"
    | "payments,accounting_period"
    | "payments,company"
    | "payments,company,accounting_period"
    | "payments,contact"
    | "payments,contact,accounting_period"
    | "payments,contact,company"
    | "payments,contact,company,accounting_period"
    | "payments,line_items"
    | "payments,line_items,accounting_period"
    | "payments,line_items,company"
    | "payments,line_items,company,accounting_period"
    | "payments,line_items,contact"
    | "payments,line_items,contact,accounting_period"
    | "payments,line_items,contact,company"
    | "payments,line_items,contact,company,accounting_period"
    | "payments,line_items,tracking_categories"
    | "payments,line_items,tracking_categories,accounting_period"
    | "payments,line_items,tracking_categories,company"
    | "payments,line_items,tracking_categories,company,accounting_period"
    | "payments,line_items,tracking_categories,contact"
    | "payments,line_items,tracking_categories,contact,accounting_period"
    | "payments,line_items,tracking_categories,contact,company"
    | "payments,line_items,tracking_categories,contact,company,accounting_period"
    | "payments,tracking_categories"
    | "payments,tracking_categories,accounting_period"
    | "payments,tracking_categories,company"
    | "payments,tracking_categories,company,accounting_period"
    | "payments,tracking_categories,contact"
    | "payments,tracking_categories,contact,accounting_period"
    | "payments,tracking_categories,contact,company"
    | "payments,tracking_categories,contact,company,accounting_period"
    | "tracking_categories"
    | "tracking_categories,accounting_period"
    | "tracking_categories,company"
    | "tracking_categories,company,accounting_period"
    | "tracking_categories,contact"
    | "tracking_categories,contact,accounting_period"
    | "tracking_categories,contact,company"
    | "tracking_categories,contact,company,accounting_period";

export const CreditNotesListRequestExpand = {
    AccountingPeriod: "accounting_period",
    Company: "company",
    CompanyAccountingPeriod: "company,accounting_period",
    Contact: "contact",
    ContactAccountingPeriod: "contact,accounting_period",
    ContactCompany: "contact,company",
    ContactCompanyAccountingPeriod: "contact,company,accounting_period",
    LineItems: "line_items",
    LineItemsAccountingPeriod: "line_items,accounting_period",
    LineItemsCompany: "line_items,company",
    LineItemsCompanyAccountingPeriod: "line_items,company,accounting_period",
    LineItemsContact: "line_items,contact",
    LineItemsContactAccountingPeriod: "line_items,contact,accounting_period",
    LineItemsContactCompany: "line_items,contact,company",
    LineItemsContactCompanyAccountingPeriod: "line_items,contact,company,accounting_period",
    LineItemsTrackingCategories: "line_items,tracking_categories",
    LineItemsTrackingCategoriesAccountingPeriod: "line_items,tracking_categories,accounting_period",
    LineItemsTrackingCategoriesCompany: "line_items,tracking_categories,company",
    LineItemsTrackingCategoriesCompanyAccountingPeriod: "line_items,tracking_categories,company,accounting_period",
    LineItemsTrackingCategoriesContact: "line_items,tracking_categories,contact",
    LineItemsTrackingCategoriesContactAccountingPeriod: "line_items,tracking_categories,contact,accounting_period",
    LineItemsTrackingCategoriesContactCompany: "line_items,tracking_categories,contact,company",
    LineItemsTrackingCategoriesContactCompanyAccountingPeriod:
        "line_items,tracking_categories,contact,company,accounting_period",
    Payments: "payments",
    PaymentsAccountingPeriod: "payments,accounting_period",
    PaymentsCompany: "payments,company",
    PaymentsCompanyAccountingPeriod: "payments,company,accounting_period",
    PaymentsContact: "payments,contact",
    PaymentsContactAccountingPeriod: "payments,contact,accounting_period",
    PaymentsContactCompany: "payments,contact,company",
    PaymentsContactCompanyAccountingPeriod: "payments,contact,company,accounting_period",
    PaymentsLineItems: "payments,line_items",
    PaymentsLineItemsAccountingPeriod: "payments,line_items,accounting_period",
    PaymentsLineItemsCompany: "payments,line_items,company",
    PaymentsLineItemsCompanyAccountingPeriod: "payments,line_items,company,accounting_period",
    PaymentsLineItemsContact: "payments,line_items,contact",
    PaymentsLineItemsContactAccountingPeriod: "payments,line_items,contact,accounting_period",
    PaymentsLineItemsContactCompany: "payments,line_items,contact,company",
    PaymentsLineItemsContactCompanyAccountingPeriod: "payments,line_items,contact,company,accounting_period",
    PaymentsLineItemsTrackingCategories: "payments,line_items,tracking_categories",
    PaymentsLineItemsTrackingCategoriesAccountingPeriod: "payments,line_items,tracking_categories,accounting_period",
    PaymentsLineItemsTrackingCategoriesCompany: "payments,line_items,tracking_categories,company",
    PaymentsLineItemsTrackingCategoriesCompanyAccountingPeriod:
        "payments,line_items,tracking_categories,company,accounting_period",
    PaymentsLineItemsTrackingCategoriesContact: "payments,line_items,tracking_categories,contact",
    PaymentsLineItemsTrackingCategoriesContactAccountingPeriod:
        "payments,line_items,tracking_categories,contact,accounting_period",
    PaymentsLineItemsTrackingCategoriesContactCompany: "payments,line_items,tracking_categories,contact,company",
    PaymentsLineItemsTrackingCategoriesContactCompanyAccountingPeriod:
        "payments,line_items,tracking_categories,contact,company,accounting_period",
    PaymentsTrackingCategories: "payments,tracking_categories",
    PaymentsTrackingCategoriesAccountingPeriod: "payments,tracking_categories,accounting_period",
    PaymentsTrackingCategoriesCompany: "payments,tracking_categories,company",
    PaymentsTrackingCategoriesCompanyAccountingPeriod: "payments,tracking_categories,company,accounting_period",
    PaymentsTrackingCategoriesContact: "payments,tracking_categories,contact",
    PaymentsTrackingCategoriesContactAccountingPeriod: "payments,tracking_categories,contact,accounting_period",
    PaymentsTrackingCategoriesContactCompany: "payments,tracking_categories,contact,company",
    PaymentsTrackingCategoriesContactCompanyAccountingPeriod:
        "payments,tracking_categories,contact,company,accounting_period",
    TrackingCategories: "tracking_categories",
    TrackingCategoriesAccountingPeriod: "tracking_categories,accounting_period",
    TrackingCategoriesCompany: "tracking_categories,company",
    TrackingCategoriesCompanyAccountingPeriod: "tracking_categories,company,accounting_period",
    TrackingCategoriesContact: "tracking_categories,contact",
    TrackingCategoriesContactAccountingPeriod: "tracking_categories,contact,accounting_period",
    TrackingCategoriesContactCompany: "tracking_categories,contact,company",
    TrackingCategoriesContactCompanyAccountingPeriod: "tracking_categories,contact,company,accounting_period",
} as const;
