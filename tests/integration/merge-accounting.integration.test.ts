import { MergeClient } from "../../src/Client";

describe("Merge Accounting Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY_SECONDARY;
  const accountToken = process.env.SDK_TESTING_ACCOUNTING_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY_SECONDARY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_ACCOUNTING_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.accounting.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list accounts", async () => {
    const page = await client.accounting.accounts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const page = await client.accounting.attachments.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list balance sheets", async () => {
    const page = await client.accounting.balanceSheets.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list vendor credits", async () => {
    const page = await client.accounting.vendorCredits.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list transactions", async () => {
    const page = await client.accounting.transactions.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list tracking categories", async () => {
    const page = await client.accounting.trackingCategories.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list tax rates", async () => {
    const page = await client.accounting.taxRates.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list purchase orders", async () => {
    const page = await client.accounting.purchaseOrders.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list projects", async () => {
    const page = await client.accounting.projects.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list payment terms", async () => {
    const page = await client.accounting.paymentTerms.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list payment methods", async () => {
    const page = await client.accounting.paymentMethods.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list payments", async () => {
    const page = await client.accounting.payments.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list journal entries", async () => {
    const page = await client.accounting.journalEntries.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list items", async () => {
    const page = await client.accounting.items.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list invoices", async () => {
    const page = await client.accounting.invoices.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list invoices with query params", async () => {
    const page = await client.accounting.invoices.list({
      expand: "accounting_period",
    });
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list income statements", async () => {
    const page = await client.accounting.incomeStatements.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  }, 65000);

  it("should list general ledger transactions", async () => {
    const page = await client.accounting.generalLedgerTransactions.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list expenses", async () => {
    const page = await client.accounting.expenses.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list employees", async () => {
    const page = await client.accounting.employees.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list credit notes", async () => {
    const page = await client.accounting.creditNotes.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list contacts", async () => {
    const page = await client.accounting.contacts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should list company info", async () => {
    const page = await client.accounting.companyInfo.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.accounting.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });


  it("should retrieve linked account scopes", async () => {
    const { data: body, rawResponse: response } = await client.accounting.scopes.linkedAccountScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { data: body, rawResponse: response } = await client.accounting.scopes.defaultScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const page = await client.accounting.syncStatus.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  }, 65000);
});
