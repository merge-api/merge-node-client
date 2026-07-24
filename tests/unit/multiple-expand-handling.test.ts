import { createRequestUrl } from "../../src/core/fetcher/createRequestUrl";

describe("Multiple Expand Parameter Handling", () => {
    describe("createRequestUrl flattens arrays to CSV", () => {
        it("should join array values with commas instead of repeating params", () => {
            const url = createRequestUrl("https://api.merge.dev/hris/v1/employees", {
                expand: ["groups", "work_location"],
                include_remote_data: true,
            });
            expect(url).toBe(
                "https://api.merge.dev/hris/v1/employees?expand=groups%2Cwork_location&include_remote_data=true"
            );
        });

        it("should handle single expand value (not array)", () => {
            const url = createRequestUrl("https://api.merge.dev/hris/v1/employees", {
                expand: "groups",
            });
            expect(url).toBe("https://api.merge.dev/hris/v1/employees?expand=groups");
        });

        it("should handle three or more expand values", () => {
            const url = createRequestUrl("https://api.merge.dev/accounting/v1/contacts", {
                expand: ["addresses", "phone_numbers", "company"],
            });
            expect(url).toBe(
                "https://api.merge.dev/accounting/v1/contacts?expand=addresses%2Cphone_numbers%2Ccompany"
            );
        });

        it("should handle undefined expand", () => {
            const url = createRequestUrl("https://api.merge.dev/hris/v1/employees", {
                expand: undefined,
                cursor: "abc123",
            });
            expect(url).toBe("https://api.merge.dev/hris/v1/employees?cursor=abc123");
        });
    });

    describe("SDK client serializes expand correctly", () => {
        const mockOptions = {
            apiKey: "test-api-key",
            environment: "https://api.merge.dev",
        };

        it("should produce correct URL with array expand via fetcher", async () => {
            const { Accounting } = require("../../src");

            let capturedUrl: string | undefined;
            const mockFetcher = jest.fn().mockImplementation((args: any) => {
                // Reconstruct the URL as fetcherImpl would
                capturedUrl = createRequestUrl(args.url, args.queryParameters);
                return { ok: true, body: { results: [] } };
            });

            const accounting = new Accounting({
                ...mockOptions,
                fetcher: mockFetcher,
            });

            await accounting.contacts.list({
                expand: ["addresses", "phone_numbers", "company"],
            });

            expect(capturedUrl).toContain("expand=addresses%2Cphone_numbers%2Ccompany");
        });

        it("should produce correct URL with single expand via fetcher", async () => {
            const { Accounting } = require("../../src");

            let capturedUrl: string | undefined;
            const mockFetcher = jest.fn().mockImplementation((args: any) => {
                capturedUrl = createRequestUrl(args.url, args.queryParameters);
                return { ok: true, body: { results: [] } };
            });

            const accounting = new Accounting({
                ...mockOptions,
                fetcher: mockFetcher,
            });

            await accounting.contacts.list({
                expand: "addresses",
            });

            expect(capturedUrl).toContain("expand=addresses");
            // Should NOT contain a comma since it's a single value
            expect(capturedUrl).not.toContain("%2C");
        });
    });
});
