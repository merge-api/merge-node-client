import { MergeClient } from "../../src/Client";

describe("Merge Accounting Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY_ACCOUNTING;
  const accountToken = process.env.SDK_TESTING_ACCOUNTING_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY_ACCOUNTING env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_ACCOUNTING_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.accounting.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list accounts", async () => {
    const { data: body, rawResponse: response } = await client.accounting.accounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const { data: body, rawResponse: response } = await client.accounting.attachments.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list balance sheets", async () => {
    const { data: body, rawResponse: response } = await client.accounting.balanceSheets.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list vendor credits", async () => {
    const { data: body, rawResponse: response } = await client.accounting.vendorCredits.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list transactions", async () => {
    const { data: body, rawResponse: response } = await client.accounting.transactions.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list tracking categories", async () => {
    const { data: body, rawResponse: response } = await client.accounting.trackingCategories.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list tax rates", async () => {
    const { data: body, rawResponse: response } = await client.accounting.taxRates.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list purchase orders", async () => {
    const { data: body, rawResponse: response } = await client.accounting.purchaseOrders.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list projects", async () => {
    const { data: body, rawResponse: response } = await client.accounting.projects.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payment terms", async () => {
    const { data: body, rawResponse: response } = await client.accounting.paymentTerms.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payment methods", async () => {
    const { data: body, rawResponse: response } = await client.accounting.paymentMethods.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payments", async () => {
    const { data: body, rawResponse: response } = await client.accounting.payments.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list journal entries", async () => {
    const { data: body, rawResponse: response } = await client.accounting.journalEntries.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list items", async () => {
    const { data: body, rawResponse: response } = await client.accounting.items.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list invoices", async () => {
    const { data: body, rawResponse: response } = await client.accounting.invoices.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list invoices with query params", async () => {
    const { data: body, rawResponse: response } = await client.accounting.invoices.list({
      expand: ["employee", "accounting_period", "company"],
    }).withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list income statements", async () => {
    const { data: body, rawResponse: response } = await client.accounting.incomeStatements.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list general ledger transactions", async () => {
    const { data: body, rawResponse: response } = await client.accounting.generalLedgerTransactions.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list expenses", async () => {
    const { data: body, rawResponse: response } = await client.accounting.expenses.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list employees", async () => {
    const { data: body, rawResponse: response } = await client.accounting.employees.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list credit notes", async () => {
    const { data: body, rawResponse: response } = await client.accounting.creditNotes.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list contacts", async () => {
    const { data: body, rawResponse: response } = await client.accounting.contacts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list company info", async () => {
    const { data: body, rawResponse: response } = await client.accounting.companyInfo.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
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
    const { data: body, rawResponse: response } = await client.accounting.syncStatus.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });
});
