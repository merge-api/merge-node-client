import { MergeClient } from "../../src/Client";

describe("Merge HRIS Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY_SECONDARY;
  const accountToken = process.env.SDK_TESTING_HRIS_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY_SECONDARY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_HRIS_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.hris.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list employees", async () => {
    const { data: body, rawResponse: response } = await client.hris.employees.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list employments", async () => {
    const { data: body, rawResponse: response } = await client.hris.employments.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list teams", async () => {
    const { data: body, rawResponse: response } = await client.hris.teams.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list locations", async () => {
    const { data: body, rawResponse: response } = await client.hris.locations.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list benefits", async () => {
    const { data: body, rawResponse: response } = await client.hris.benefits.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list pay groups", async () => {
    const { data: body, rawResponse: response } = await client.hris.payGroups.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list dependents", async () => {
    const { data: body, rawResponse: response } = await client.hris.dependents.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list groups", async () => {
    const { data: body, rawResponse: response } = await client.hris.groups.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list time off", async () => {
    const { data: body, rawResponse: response } = await client.hris.timeOff.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list time off balances", async () => {
    const { data: body, rawResponse: response } = await client.hris.timeOffBalances.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list bank info", async () => {
    const { data: body, rawResponse: response } = await client.hris.bankInfo.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve linked account scopes", async () => {
    const { data: body, rawResponse: response } = await client.hris.scopes.linkedAccountScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { data: body, rawResponse: response } = await client.hris.scopes.defaultScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const { data: body, rawResponse: response } = await client.hris.syncStatus.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  }, 65000);

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.hris.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const { data: body, rawResponse: response } = await client.hris.issues.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });


  it("should retrieve audit trail", async () => {
    const { data: body, rawResponse: response } = await client.hris.auditTrail.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.hris.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });
});