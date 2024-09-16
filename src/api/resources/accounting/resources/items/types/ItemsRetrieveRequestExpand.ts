/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ItemsRetrieveRequestExpand =
    | "company"
    | "company,purchase_tax_rate"
    | "company,sales_tax_rate"
    | "company,sales_tax_rate,purchase_tax_rate"
    | "purchase_account"
    | "purchase_account,company"
    | "purchase_account,company,purchase_tax_rate"
    | "purchase_account,company,sales_tax_rate"
    | "purchase_account,company,sales_tax_rate,purchase_tax_rate"
    | "purchase_account,purchase_tax_rate"
    | "purchase_account,sales_account"
    | "purchase_account,sales_account,company"
    | "purchase_account,sales_account,company,purchase_tax_rate"
    | "purchase_account,sales_account,company,sales_tax_rate"
    | "purchase_account,sales_account,company,sales_tax_rate,purchase_tax_rate"
    | "purchase_account,sales_account,purchase_tax_rate"
    | "purchase_account,sales_account,sales_tax_rate"
    | "purchase_account,sales_account,sales_tax_rate,purchase_tax_rate"
    | "purchase_account,sales_tax_rate"
    | "purchase_account,sales_tax_rate,purchase_tax_rate"
    | "purchase_tax_rate"
    | "sales_account"
    | "sales_account,company"
    | "sales_account,company,purchase_tax_rate"
    | "sales_account,company,sales_tax_rate"
    | "sales_account,company,sales_tax_rate,purchase_tax_rate"
    | "sales_account,purchase_tax_rate"
    | "sales_account,sales_tax_rate"
    | "sales_account,sales_tax_rate,purchase_tax_rate"
    | "sales_tax_rate"
    | "sales_tax_rate,purchase_tax_rate";

export const ItemsRetrieveRequestExpand = {
    Company: "company",
    CompanyPurchaseTaxRate: "company,purchase_tax_rate",
    CompanySalesTaxRate: "company,sales_tax_rate",
    CompanySalesTaxRatePurchaseTaxRate: "company,sales_tax_rate,purchase_tax_rate",
    PurchaseAccount: "purchase_account",
    PurchaseAccountCompany: "purchase_account,company",
    PurchaseAccountCompanyPurchaseTaxRate: "purchase_account,company,purchase_tax_rate",
    PurchaseAccountCompanySalesTaxRate: "purchase_account,company,sales_tax_rate",
    PurchaseAccountCompanySalesTaxRatePurchaseTaxRate: "purchase_account,company,sales_tax_rate,purchase_tax_rate",
    PurchaseAccountPurchaseTaxRate: "purchase_account,purchase_tax_rate",
    PurchaseAccountSalesAccount: "purchase_account,sales_account",
    PurchaseAccountSalesAccountCompany: "purchase_account,sales_account,company",
    PurchaseAccountSalesAccountCompanyPurchaseTaxRate: "purchase_account,sales_account,company,purchase_tax_rate",
    PurchaseAccountSalesAccountCompanySalesTaxRate: "purchase_account,sales_account,company,sales_tax_rate",
    PurchaseAccountSalesAccountCompanySalesTaxRatePurchaseTaxRate:
        "purchase_account,sales_account,company,sales_tax_rate,purchase_tax_rate",
    PurchaseAccountSalesAccountPurchaseTaxRate: "purchase_account,sales_account,purchase_tax_rate",
    PurchaseAccountSalesAccountSalesTaxRate: "purchase_account,sales_account,sales_tax_rate",
    PurchaseAccountSalesAccountSalesTaxRatePurchaseTaxRate:
        "purchase_account,sales_account,sales_tax_rate,purchase_tax_rate",
    PurchaseAccountSalesTaxRate: "purchase_account,sales_tax_rate",
    PurchaseAccountSalesTaxRatePurchaseTaxRate: "purchase_account,sales_tax_rate,purchase_tax_rate",
    PurchaseTaxRate: "purchase_tax_rate",
    SalesAccount: "sales_account",
    SalesAccountCompany: "sales_account,company",
    SalesAccountCompanyPurchaseTaxRate: "sales_account,company,purchase_tax_rate",
    SalesAccountCompanySalesTaxRate: "sales_account,company,sales_tax_rate",
    SalesAccountCompanySalesTaxRatePurchaseTaxRate: "sales_account,company,sales_tax_rate,purchase_tax_rate",
    SalesAccountPurchaseTaxRate: "sales_account,purchase_tax_rate",
    SalesAccountSalesTaxRate: "sales_account,sales_tax_rate",
    SalesAccountSalesTaxRatePurchaseTaxRate: "sales_account,sales_tax_rate,purchase_tax_rate",
    SalesTaxRate: "sales_tax_rate",
    SalesTaxRatePurchaseTaxRate: "sales_tax_rate,purchase_tax_rate",
} as const;
