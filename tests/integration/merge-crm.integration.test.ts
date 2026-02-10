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
    const page = await client.crm.accounts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  }, 65000);

  it("should list contacts", async () => {
    const page = await client.crm.contacts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list leads", async () => {
    const page = await client.crm.leads.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list opportunities", async () => {
    const page = await client.crm.opportunities.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list users", async () => {
    const page = await client.crm.users.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list tasks", async () => {
    const page = await client.crm.tasks.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list notes", async () => {
    const page = await client.crm.notes.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list engagements", async () => {
    const page = await client.crm.engagements.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list stages", async () => {
    const page = await client.crm.stages.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });


  it("should list custom object classes", async () => {
    const page = await client.crm.customObjectClasses.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
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
    const page = await client.crm.syncStatus.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  }, 65000);

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.crm.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const page = await client.crm.issues.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });


  it("should retrieve audit trail", async () => {
    const page = await client.crm.auditTrail.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.crm.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });
});
