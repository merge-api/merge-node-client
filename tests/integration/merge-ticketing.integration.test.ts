import { MergeClient } from "../../src/Client";

describe("Merge Ticketing Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY;
  const accountToken = process.env.SDK_TESTING_TICKETING_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_TICKETING_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list accounts", async () => {
    const page = await client.ticketing.accounts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const page = await client.ticketing.attachments.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list collections", async () => {
    const page = await client.ticketing.collections.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list comments", async () => {
    const page = await client.ticketing.comments.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list contacts", async () => {
    const page = await client.ticketing.contacts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });


  it("should list roles", async () => {
    const page = await client.ticketing.roles.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list tags", async () => {
    const page = await client.ticketing.tags.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list teams", async () => {
    const page = await client.ticketing.teams.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list tickets", async () => {
    const page = await client.ticketing.tickets.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list users", async () => {
    const page = await client.ticketing.users.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should retrieve linked account scopes", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.scopes.linkedAccountScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.scopes.defaultScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const page = await client.ticketing.syncStatus.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
  }, 65000);

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const page = await client.ticketing.issues.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should list linked accounts", async () => {
    const page = await client.ticketing.linkedAccounts.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should retrieve audit trail", async () => {
    const page = await client.ticketing.auditTrail.list();
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });

  it("should list tickets with query params", async () => {
    const page = await client.ticketing.tickets.list({
      expand: "account",
    });
    expect(page.rawResponse.status).toBe(200);
    expect(page.response).toBeTruthy();
    expect(Array.isArray(page.response.results)).toBe(true);
  });
});
