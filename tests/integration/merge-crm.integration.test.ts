import { MergeClient } from "../../src/Client";

describe("Merge CRM Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY_SECONDARY;
  const accountToken = process.env.SDK_TESTING_CRM_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY_SECONDARY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_CRM_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.crm.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list accounts", async () => {
    const { data: body, rawResponse: response } = await client.crm.accounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list contacts", async () => {
    const { data: body, rawResponse: response } = await client.crm.contacts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list leads", async () => {
    const { data: body, rawResponse: response } = await client.crm.leads.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list opportunities", async () => {
    const { data: body, rawResponse: response } = await client.crm.opportunities.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list users", async () => {
    const { data: body, rawResponse: response } = await client.crm.users.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list tasks", async () => {
    const { data: body, rawResponse: response } = await client.crm.tasks.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list notes", async () => {
    const { data: body, rawResponse: response } = await client.crm.notes.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list engagements", async () => {
    const { data: body, rawResponse: response } = await client.crm.engagements.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list stages", async () => {
    const { data: body, rawResponse: response } = await client.crm.stages.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list custom objects", async () => {
    const { data: body, rawResponse: response } = await client.crm.customObjects.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list custom object classes", async () => {
    const { data: body, rawResponse: response } = await client.crm.customObjectClasses.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list association types", async () => {
    const { data: body, rawResponse: response } = await client.crm.associationTypes.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list associations", async () => {
    const { data: body, rawResponse: response } = await client.crm.associations.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve linked account scopes", async () => {
    const { data: body, rawResponse: response } = await client.crm.scopes.linkedAccountScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { data: body, rawResponse: response } = await client.crm.scopes.defaultScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const { data: body, rawResponse: response } = await client.crm.syncStatus.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  }, 60000);

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.crm.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const { data: body, rawResponse: response } = await client.crm.issues.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list linked accounts", async () => {
    const { data: body, rawResponse: response } = await client.crm.linkedAccounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve audit trail", async () => {
    const { data: body, rawResponse: response } = await client.crm.auditTrail.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.crm.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });
});