import { MergeClient } from "../../src/Client";

describe("Merge FileStorage Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY;
  const accountToken = process.env.SDK_TESTING_FILE_STORAGE_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_FILE_STORAGE_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should retrieve account details", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list drives", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.drives.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list files", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.files.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list folders", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.folders.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list groups", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.groups.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list users", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.users.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve field mapping", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.fieldMapping.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve linked account scopes", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.scopes.linkedAccountScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.scopes.defaultScopesRetrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.syncStatus.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list available actions", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.availableActions.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.issues.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list linked accounts", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.linkedAccounts.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve audit trail", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.auditTrail.list().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.accountDetails.retrieve().withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });

  it("should list files with query params", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.files.list({
      expand: ["permissions", "folder"],
    }).withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list folders with query params", async () => {
    const { data: body, rawResponse: response } = await client.filestorage.folders.list({
      expand: ["permissions", "parent_folder"],
    }).withRawResponse();
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });
});