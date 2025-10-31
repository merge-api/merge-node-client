import { MergeClient } from "../src/Client";

describe("Merge Knowledgebase Client Integration", () => {
  const apiKey = process.env.SDK_TESTING_KEY;
  const accountToken = process.env.SDK_TESTING_KNOWLEDGEBASE_ACCOUNT_TOKEN;
  let client: MergeClient;

  beforeAll(() => {
    if (!apiKey) throw new Error("SDK_TESTING_KEY env var not set");
    if (!accountToken) throw new Error("SDK_TESTING_KNOWLEDGEBASE_ACCOUNT_TOKEN env var not set");
    client = new MergeClient({ apiKey, accountToken });
  });

  it("should list articles", async () => {
    const { response, body } = await client.knowledgebase.articles.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list articles with expand author", async () => {
    const { response, body } = await client.knowledgebase.articles.list({
      expand: ["author"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list articles with expand attachments", async () => {
    const { response, body } = await client.knowledgebase.articles.list({
      expand: ["attachments"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list articles with expand permissions", async () => {
    const { response, body } = await client.knowledgebase.articles.list({
      expand: ["permissions"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list attachments", async () => {
    const { response, body } = await client.knowledgebase.attachments.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve attachment", async () => {
    const { body: attachmentsResponse } = await client.knowledgebase.attachments.list({
      pageSize: 1,
      withResponse: true
    });

    if (attachmentsResponse.results && attachmentsResponse.results.length > 0) {
      const attachmentId = attachmentsResponse.results[0].id;
      const { response, body } = await client.knowledgebase.attachments.retrieve(attachmentId, {
        withResponse: true
      });
      expect(response.status).toBe(200);
      expect(body).toBeTruthy();
      expect(body.id).toBe(attachmentId);
    }
  });

  it("should list containers", async () => {
    const { response, body } = await client.knowledgebase.containers.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve container", async () => {
    const { body: containersResponse } = await client.knowledgebase.containers.list({
      pageSize: 1,
      withResponse: true
    });

    if (containersResponse.results && containersResponse.results.length > 0) {
      const containerId = containersResponse.results[0].id;
      const { response, body } = await client.knowledgebase.containers.retrieve(containerId, {
        withResponse: true
      });
      expect(response.status).toBe(200);
      expect(body).toBeTruthy();
      expect(body.id).toBe(containerId);
    }
  });

  it("should list containers with expand permissions", async () => {
    const { response, body } = await client.knowledgebase.containers.list({
      expand: ["permissions"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list containers with expand parent container", async () => {
    const { response, body } = await client.knowledgebase.containers.list({
      expand: ["parent_container"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve container with expand permissions", async () => {
    const { body: containersResponse } = await client.knowledgebase.containers.list({
      pageSize: 1,
      withResponse: true
    });

    if (containersResponse.results && containersResponse.results.length > 0) {
      const containerId = containersResponse.results[0].id;
      const { response, body } = await client.knowledgebase.containers.retrieve(containerId, {
        expand: ["permissions"],
        withResponse: true
      });
      expect(response.status).toBe(200);
      expect(body).toBeTruthy();
      expect(body.id).toBe(containerId);
    }
  });

  it("should retrieve container with expand parent container", async () => {
    const { body: containersResponse } = await client.knowledgebase.containers.list({
      pageSize: 1,
      withResponse: true
    });

    if (containersResponse.results && containersResponse.results.length > 0) {
      const containerId = containersResponse.results[0].id;
      const { response, body } = await client.knowledgebase.containers.retrieve(containerId, {
        expand: ["parent_container"],
        withResponse: true
      });
      expect(response.status).toBe(200);
      expect(body).toBeTruthy();
      expect(body.id).toBe(containerId);
    }
  });

  it("should list sync status", async () => {
    const { response, body } = await client.knowledgebase.syncStatus.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve account details", async () => {
    const { response, body } = await client.knowledgebase.accountDetails.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(body.id).toBeDefined();
  });

  it("should list users", async () => {
    const { response, body } = await client.knowledgebase.users.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve user", async () => {
    const { body: usersResponse } = await client.knowledgebase.users.list({
      pageSize: 1,
      withResponse: true
    });

    if (usersResponse.results && usersResponse.results.length > 0) {
      const userId = usersResponse.results[0].id;
      const { response, body } = await client.knowledgebase.users.retrieve(userId, {
        withResponse: true
      });
      expect(response.status).toBe(200);
      expect(body).toBeTruthy();
      expect(body.id).toBe(userId);
    }
  });

  it("should list groups", async () => {
    const { response, body } = await client.knowledgebase.groups.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list groups with expand users", async () => {
    const { response, body } = await client.knowledgebase.groups.list({
      expand: ["users"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list groups with expand parent group", async () => {
    const { response, body } = await client.knowledgebase.groups.list({
      expand: ["parent_group"],
      withResponse: true
    });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should list audit trail", async () => {
    const { response, body } = await client.knowledgebase.auditTrail.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve available actions", async () => {
    const { response, body } = await client.knowledgebase.availableActions.retrieve({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should list linked accounts", async () => {
    const { response, body } = await client.knowledgebase.linkedAccounts.list({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
    expect(Array.isArray(body.results)).toBe(true);
  });

  it("should retrieve default scopes", async () => {
    const { response, body } = await client.knowledgebase.scopes.getDefaultScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });

  it("should retrieve linked account scopes", async () => {
    const { response, body } = await client.knowledgebase.scopes.getLinkedAccountScopes({ withResponse: true });
    expect(response.status).toBe(200);
    expect(body).toBeTruthy();
  });
});