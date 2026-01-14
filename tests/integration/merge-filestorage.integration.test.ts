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
    const { response, body } = await client.filestorage.accountDetails.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list drives", async () => {
    const { response, body } = await client.filestorage.drives.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list files", async () => {
    const { response, body } = await client.filestorage.files.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list folders", async () => {
    const { response, body } = await client.filestorage.folders.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list groups", async () => {
    const { response, body } = await client.filestorage.groups.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list users", async () => {
    const { response, body } = await client.filestorage.users.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve field mapping", async () => {
    const { response, body } = await client.filestorage.fieldMapping.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve linked account scopes", async () => {
    const { response, body } = await client.filestorage.scopes.getLinkedAccountScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve default scopes", async () => {
    const { response, body } = await client.filestorage.scopes.getDefaultScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list sync status", async () => {
    const { response, body } = await client.filestorage.syncStatus.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list available actions", async () => {
    const { response, body } = await client.filestorage.availableActions.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list issues", async () => {
    const { response, body } = await client.filestorage.issues.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list linked accounts", async () => {
    const { response, body } = await client.filestorage.linkedAccounts.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve audit trail", async () => {
    const { response, body } = await client.filestorage.auditTrail.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details fields exist", async () => {
    const { response, body } = await client.filestorage.accountDetails.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.integration).toBeDefined();
    expect(body.category).toBeDefined();
  });

  it("should list files with query params", async () => {
    const { response, body } = await client.filestorage.files.list({
      expand: ["permissions", "folder"],
      withResponse: true,
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list folders with query params", async () => {
    const { response, body } = await client.filestorage.folders.list({
      expand: ["permissions", "parent_folder"],
      withResponse: true,
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });
});