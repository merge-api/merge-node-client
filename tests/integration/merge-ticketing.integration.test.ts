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
    const { data: body, rawResponse: response } = await client.ticketing.accounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.attachments.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list collections", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.collections.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list comments", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.comments.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list contacts", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.contacts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });


  it("should list roles", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.roles.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list tags", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.tags.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list teams", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.teams.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list tickets", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.tickets.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list users", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.users.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
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
    const { data: body, rawResponse: response } = await client.ticketing.syncStatus.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  }, 60000);

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.issues.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list linked accounts", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.linkedAccounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve audit trail", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.auditTrail.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });

  it("should list tickets with query params", async () => {
    const { data: body, rawResponse: response } = await client.ticketing.tickets.list({
      expand: "account",
    }).withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });
});