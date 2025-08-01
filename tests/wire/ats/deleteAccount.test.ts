/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("DeleteAccount", () => {
    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        server.mockEndpoint().post("/ats/v1/delete-account").respondWith().statusCode(200).build();

        const response = await client.ats.deleteAccount.delete();
        expect(response).toEqual(undefined);
    });
});
