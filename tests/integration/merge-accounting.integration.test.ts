import { MergeClient } from "../../src/Client";

describe("Merge Accounting Client Integration", () => {
  const apiKey = process.env.MERGE_API_KEY_ACCOUNTING;
  const accountToken = process.env.MERGE_ACCOUNT_TOKEN_ACCOUNTING;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("MERGE_API_KEY_ACCOUNTING env var not set");
    if (!accountToken) throw new Error("MERGE_ACCOUNT_TOKEN_ACCOUNTING env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { response, body } = await client.accounting.accountDetails.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list accounts", async () => {
    const { response, body } = await client.accounting.accounts.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const { response, body } = await client.accounting.attachments.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list balance sheets", async () => {
    const { response, body } = await client.accounting.balanceSheets.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list vendor credits", async () => {
    const { response, body } = await client.accounting.vendorCredits.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list transactions", async () => {
    const { response, body } = await client.accounting.transactions.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list tracking categories", async () => {
    const { response, body } = await client.accounting.trackingCategories.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list tax rates", async () => {
    const { response, body } = await client.accounting.taxRates.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list purchase orders", async () => {
    const { response, body } = await client.accounting.purchaseOrders.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list projects", async () => {
    const { response, body } = await client.accounting.projects.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payment terms", async () => {
    const { response, body } = await client.accounting.paymentTerms.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payment methods", async () => {
    const { response, body } = await client.accounting.paymentMethods.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list payments", async () => {
    const { response, body } = await client.accounting.payments.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list journal entries", async () => {
    const { response, body } = await client.accounting.journalEntries.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list items", async () => {
    const { response, body } = await client.accounting.items.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list invoices", async () => {
    const { response, body } = await client.accounting.invoices.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list invoices with query params", async () => {
    const { response, body } = await client.accounting.invoices.list({
      expand: ["employee", "accounting_period", "company"],
      withResponse: true,
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list income statements", async () => {
    const { response, body } = await client.accounting.incomeStatements.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list general ledger transactions", async () => {
    const { response, body } = await client.accounting.generalLedgerTransactions.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list expenses", async () => {
    const { response, body } = await client.accounting.expenses.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list employees", async () => {
    const { response, body } = await client.accounting.employees.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list credit notes", async () => {
    const { response, body } = await client.accounting.creditNotes.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list contacts", async () => {
    const { response, body } = await client.accounting.contacts.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list company info", async () => {
    const { response, body } = await client.accounting.companyInfo.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve account details fields exist", async () => {
    const { response, body } = await client.accounting.accountDetails.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });

  it("should retrieve field mapping", async () => {
    const { response, body } = await client.accounting.fieldMapping.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve linked account scopes", async () => {
    const { response, body } = await client.accounting.scopes.getLinkedAccountScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { response, body } = await client.accounting.scopes.getDefaultScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const { response, body } = await client.accounting.syncStatus.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });
});
