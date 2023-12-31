/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PaymentsRetrieveRequestExpand =
    | "account"
    | "account,accounting_period"
    | "account,company"
    | "account,company,accounting_period"
    | "accounting_period"
    | "applied_to_lines"
    | "applied_to_lines,account"
    | "applied_to_lines,account,accounting_period"
    | "applied_to_lines,account,company"
    | "applied_to_lines,account,company,accounting_period"
    | "applied_to_lines,accounting_period"
    | "applied_to_lines,company"
    | "applied_to_lines,company,accounting_period"
    | "applied_to_lines,contact"
    | "applied_to_lines,contact,account"
    | "applied_to_lines,contact,account,accounting_period"
    | "applied_to_lines,contact,account,company"
    | "applied_to_lines,contact,account,company,accounting_period"
    | "applied_to_lines,contact,accounting_period"
    | "applied_to_lines,contact,company"
    | "applied_to_lines,contact,company,accounting_period"
    | "company"
    | "company,accounting_period"
    | "contact"
    | "contact,account"
    | "contact,account,accounting_period"
    | "contact,account,company"
    | "contact,account,company,accounting_period"
    | "contact,accounting_period"
    | "contact,company"
    | "contact,company,accounting_period"
    | "tracking_categories"
    | "tracking_categories,account"
    | "tracking_categories,account,accounting_period"
    | "tracking_categories,account,company"
    | "tracking_categories,account,company,accounting_period"
    | "tracking_categories,accounting_period"
    | "tracking_categories,applied_to_lines"
    | "tracking_categories,applied_to_lines,account"
    | "tracking_categories,applied_to_lines,account,accounting_period"
    | "tracking_categories,applied_to_lines,account,company"
    | "tracking_categories,applied_to_lines,account,company,accounting_period"
    | "tracking_categories,applied_to_lines,accounting_period"
    | "tracking_categories,applied_to_lines,company"
    | "tracking_categories,applied_to_lines,company,accounting_period"
    | "tracking_categories,applied_to_lines,contact"
    | "tracking_categories,applied_to_lines,contact,account"
    | "tracking_categories,applied_to_lines,contact,account,accounting_period"
    | "tracking_categories,applied_to_lines,contact,account,company"
    | "tracking_categories,applied_to_lines,contact,account,company,accounting_period"
    | "tracking_categories,applied_to_lines,contact,accounting_period"
    | "tracking_categories,applied_to_lines,contact,company"
    | "tracking_categories,applied_to_lines,contact,company,accounting_period"
    | "tracking_categories,company"
    | "tracking_categories,company,accounting_period"
    | "tracking_categories,contact"
    | "tracking_categories,contact,account"
    | "tracking_categories,contact,account,accounting_period"
    | "tracking_categories,contact,account,company"
    | "tracking_categories,contact,account,company,accounting_period"
    | "tracking_categories,contact,accounting_period"
    | "tracking_categories,contact,company"
    | "tracking_categories,contact,company,accounting_period";

export const PaymentsRetrieveRequestExpand = {
    Account: "account",
    AccountAccountingPeriod: "account,accounting_period",
    AccountCompany: "account,company",
    AccountCompanyAccountingPeriod: "account,company,accounting_period",
    AccountingPeriod: "accounting_period",
    AppliedToLines: "applied_to_lines",
    AppliedToLinesAccount: "applied_to_lines,account",
    AppliedToLinesAccountAccountingPeriod: "applied_to_lines,account,accounting_period",
    AppliedToLinesAccountCompany: "applied_to_lines,account,company",
    AppliedToLinesAccountCompanyAccountingPeriod: "applied_to_lines,account,company,accounting_period",
    AppliedToLinesAccountingPeriod: "applied_to_lines,accounting_period",
    AppliedToLinesCompany: "applied_to_lines,company",
    AppliedToLinesCompanyAccountingPeriod: "applied_to_lines,company,accounting_period",
    AppliedToLinesContact: "applied_to_lines,contact",
    AppliedToLinesContactAccount: "applied_to_lines,contact,account",
    AppliedToLinesContactAccountAccountingPeriod: "applied_to_lines,contact,account,accounting_period",
    AppliedToLinesContactAccountCompany: "applied_to_lines,contact,account,company",
    AppliedToLinesContactAccountCompanyAccountingPeriod: "applied_to_lines,contact,account,company,accounting_period",
    AppliedToLinesContactAccountingPeriod: "applied_to_lines,contact,accounting_period",
    AppliedToLinesContactCompany: "applied_to_lines,contact,company",
    AppliedToLinesContactCompanyAccountingPeriod: "applied_to_lines,contact,company,accounting_period",
    Company: "company",
    CompanyAccountingPeriod: "company,accounting_period",
    Contact: "contact",
    ContactAccount: "contact,account",
    ContactAccountAccountingPeriod: "contact,account,accounting_period",
    ContactAccountCompany: "contact,account,company",
    ContactAccountCompanyAccountingPeriod: "contact,account,company,accounting_period",
    ContactAccountingPeriod: "contact,accounting_period",
    ContactCompany: "contact,company",
    ContactCompanyAccountingPeriod: "contact,company,accounting_period",
    TrackingCategories: "tracking_categories",
    TrackingCategoriesAccount: "tracking_categories,account",
    TrackingCategoriesAccountAccountingPeriod: "tracking_categories,account,accounting_period",
    TrackingCategoriesAccountCompany: "tracking_categories,account,company",
    TrackingCategoriesAccountCompanyAccountingPeriod: "tracking_categories,account,company,accounting_period",
    TrackingCategoriesAccountingPeriod: "tracking_categories,accounting_period",
    TrackingCategoriesAppliedToLines: "tracking_categories,applied_to_lines",
    TrackingCategoriesAppliedToLinesAccount: "tracking_categories,applied_to_lines,account",
    TrackingCategoriesAppliedToLinesAccountAccountingPeriod:
        "tracking_categories,applied_to_lines,account,accounting_period",
    TrackingCategoriesAppliedToLinesAccountCompany: "tracking_categories,applied_to_lines,account,company",
    TrackingCategoriesAppliedToLinesAccountCompanyAccountingPeriod:
        "tracking_categories,applied_to_lines,account,company,accounting_period",
    TrackingCategoriesAppliedToLinesAccountingPeriod: "tracking_categories,applied_to_lines,accounting_period",
    TrackingCategoriesAppliedToLinesCompany: "tracking_categories,applied_to_lines,company",
    TrackingCategoriesAppliedToLinesCompanyAccountingPeriod:
        "tracking_categories,applied_to_lines,company,accounting_period",
    TrackingCategoriesAppliedToLinesContact: "tracking_categories,applied_to_lines,contact",
    TrackingCategoriesAppliedToLinesContactAccount: "tracking_categories,applied_to_lines,contact,account",
    TrackingCategoriesAppliedToLinesContactAccountAccountingPeriod:
        "tracking_categories,applied_to_lines,contact,account,accounting_period",
    TrackingCategoriesAppliedToLinesContactAccountCompany:
        "tracking_categories,applied_to_lines,contact,account,company",
    TrackingCategoriesAppliedToLinesContactAccountCompanyAccountingPeriod:
        "tracking_categories,applied_to_lines,contact,account,company,accounting_period",
    TrackingCategoriesAppliedToLinesContactAccountingPeriod:
        "tracking_categories,applied_to_lines,contact,accounting_period",
    TrackingCategoriesAppliedToLinesContactCompany: "tracking_categories,applied_to_lines,contact,company",
    TrackingCategoriesAppliedToLinesContactCompanyAccountingPeriod:
        "tracking_categories,applied_to_lines,contact,company,accounting_period",
    TrackingCategoriesCompany: "tracking_categories,company",
    TrackingCategoriesCompanyAccountingPeriod: "tracking_categories,company,accounting_period",
    TrackingCategoriesContact: "tracking_categories,contact",
    TrackingCategoriesContactAccount: "tracking_categories,contact,account",
    TrackingCategoriesContactAccountAccountingPeriod: "tracking_categories,contact,account,accounting_period",
    TrackingCategoriesContactAccountCompany: "tracking_categories,contact,account,company",
    TrackingCategoriesContactAccountCompanyAccountingPeriod:
        "tracking_categories,contact,account,company,accounting_period",
    TrackingCategoriesContactAccountingPeriod: "tracking_categories,contact,accounting_period",
    TrackingCategoriesContactCompany: "tracking_categories,contact,company",
    TrackingCategoriesContactCompanyAccountingPeriod: "tracking_categories,contact,company,accounting_period",
} as const;
