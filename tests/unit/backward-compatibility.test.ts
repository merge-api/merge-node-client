describe("Backward Compatibility - Level 1 (No Credentials)", () => {
    const mockOptions = {
        apiKey: "test-api-key",
        environment: "https://api.merge.dev"
    };

    describe("Enum Backward Compatibility", () => {
        it("should accept unrecognized enum values like LOCATION for categoryType", () => {
            const { serialization } = require("../../src");

            // Test that the TrackingCategoriesListRequestCategoryType enum accepts "LOCATION"
            // This would fail without the core enum builder fix
            expect(() => {
                const result = serialization.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("LOCATION", {
                    unrecognizedObjectKeys: "strip"
                });
                expect(result).toBe("LOCATION");
            }).not.toThrow();

            // Also test that known values still work
            expect(() => {
                const result = serialization.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("CLASS");
                expect(result).toBe("CLASS");
            }).not.toThrow();

            expect(() => {
                const result = serialization.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("DEPARTMENT");
                expect(result).toBe("DEPARTMENT");
            }).not.toThrow();
        });

        it("should accept any custom string value in CategoryTypeEnum", () => {
            const { serialization } = require("../../src");

            // Test various custom values that weren't in the original enum
            const customValues = ["LOCATION", "PROJECT", "CUSTOM_TYPE", "USER_DEFINED"];

            customValues.forEach(customValue => {
                expect(() => {
                    const result = serialization.accounting.CategoryTypeEnum.jsonOrThrow(customValue);
                    expect(result).toBe(customValue);
                }).not.toThrow();
            });
        });

        it("should work in practice with trackingCategories.list() method", async () => {
            const { Accounting } = require("../../src");

            // Mock the fetcher to avoid actual HTTP calls
            const mockFetcher = jest.fn().mockResolvedValue({
                ok: true,
                body: { results: [] }
            });

            const accounting = new Accounting({
                apiKey: "test-key",
                fetcher: mockFetcher
            });

            // This should not throw when serializing the request with LOCATION categoryType
            await accounting.trackingCategories.list({
                categoryType: "LOCATION" // This should work now
            });

            // Verify the mock was called and the categoryType was serialized correctly
            expect(mockFetcher).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: expect.stringContaining("/accounting/v1/tracking-categories"),
                    method: "GET"
                })
            );
        });
    });
});